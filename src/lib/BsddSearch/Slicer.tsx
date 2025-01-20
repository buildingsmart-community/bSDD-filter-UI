import { CheckIcon, CloseButton, Combobox, Group, InputBase, Paper, Text, useCombobox } from '@mantine/core';
import { useEffect, useRef, useState } from 'react';

interface Option {
  label: string;
  value: string;
  uri: string;
}

interface SlicerProps {
  height: number;
  options: Option[];
  label: string | undefined;
  value: Option | null;
  setValue: (newValue: Option | null) => void;
  placeholder: string | undefined;
  disabled?: boolean;
}

const INITIAL_RENDER_LIMIT = 25;
const RENDER_MORE_LIMIT = 25;

function Slicer({ height, options, label, value, setValue, placeholder = 'Search values', disabled }: SlicerProps) {
  const [search, setSearch] = useState('');
  const [renderedOptions, setRenderedOptions] = useState(options.slice(0, INITIAL_RENDER_LIMIT));
  const optionsContainerRef = useRef(null);

  const combobox = useCombobox({
    onDropdownClose: () => {
      combobox.resetSelectedOption();
      if (combobox.focusTarget) {
        combobox.focusTarget();
      }
    },

    onDropdownOpen: () => {
      if (combobox.focusSearchInput) {
        combobox.focusSearchInput();
      }
    },
  });

  // useEffect(() => {
  //   if (options.length === 1 && value !== options[0]) {
  //     setValue(options[0]);
  //     setSearch(options[0].label);
  //   }
  // }, [options, setValue, value, setSearch]);

  useEffect(() => {
    setSearch(value?.label || '');
  }, [value]);

  useEffect(() => {
    // filter options based on search string, if no value is selected show all options
    const optionsToShow =
      value === null
        ? options.filter(
            (item) =>
              item?.label.toLowerCase().includes(search.toLowerCase().trim()) ||
              item?.value.toString().toLowerCase().includes(search.toLowerCase().trim()),
          )
        : options;

    // Only show limited options until scroll
    setRenderedOptions(optionsToShow.slice(0, INITIAL_RENDER_LIMIT));
  }, [options, search, value]);

  const handleScroll = (e: { currentTarget: { scrollTop: any; scrollHeight: any; clientHeight: any } }) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const threshold = 5;
    const isAtBottom = scrollHeight - scrollTop <= clientHeight + threshold;
    if (isAtBottom) {
      setRenderedOptions((prevRenderedOptions) => {
        const nextIndex = prevRenderedOptions.length;
        const moreOptions = options
          .filter((item) => item?.label.toLowerCase().includes(search.toLowerCase().trim()))
          .slice(nextIndex, nextIndex + RENDER_MORE_LIMIT);
        return [...prevRenderedOptions, ...moreOptions];
      });
    }
  };

  const comboboxOptions = renderedOptions.map((item) => (
    <Combobox.Option key={item.value} value={item.value} active={value?.value === item.value}>
      <Group gap="sm">
        {value?.value === item.value ? <CheckIcon size={12} /> : null}
        <Text fz="sm" opacity={disabled ? 0.6 : 1.0}>
          {item.label}
        </Text>
        <Text fz="xs" opacity={0.6}>
          ({item.value})
        </Text>
      </Group>
    </Combobox.Option>
  ));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Combobox
        store={combobox}
        onOptionSubmit={(newValue) => {
          if (!disabled) {
            const newOption = options.find((option) => option.value === newValue);
            const newValueToSet = newOption && value?.value !== newOption.value ? newOption : null;
            setValue(newValueToSet);
            combobox.closeDropdown();
          }
        }}
        disabled={disabled}
      >
        <Combobox.Target>
          <InputBase
            rightSection={
              !disabled && (
                <CloseButton
                  size="sm"
                  onMouseDown={(event) => {
                    event.preventDefault();
                  }}
                  onClick={() => {
                    setSearch('');
                    setValue(null);
                  }}
                  aria-label="Clear value"
                />
              )
            }
            label={label}
            value={value ? `${value.label} (${value.value})` : search}
            onChange={(event) => {
              if (!disabled) {
                setValue(null);
                combobox.updateSelectedOptionIndex();
                setSearch(event.currentTarget.value);
              }
            }}
            onClick={() => {
              if (!disabled) {
                combobox.openDropdown();
              }
            }}
            onBlur={() => combobox.closeDropdown()}
            placeholder={disabled ? '' : placeholder}
            disabled={disabled}
            // rightSectionPointerEvents="none"
          />
        </Combobox.Target>
        {height < 80 ? (
          <Combobox.Dropdown
            style={{ maxHeight: '20em', overflowY: 'auto' }}
            ref={optionsContainerRef}
            onScroll={handleScroll}
          >
            <Combobox.Options>
              {comboboxOptions.length > 0 ? comboboxOptions : <Combobox.Empty>Nothing found...</Combobox.Empty>}
            </Combobox.Options>
          </Combobox.Dropdown>
        ) : (
          <Paper
            withBorder
            my="0.2em"
            style={{
              flexGrow: 1,
              overflow: 'auto',
              backgroundColor: disabled ? 'var(--mantine-color-gray-0)' : 'transparent',
              color: disabled ? 'var(--mantine-color-gray-6)' : 'inherit',
              pointerEvents: disabled ? 'none' : 'auto',
            }}
            ref={optionsContainerRef}
            onScroll={handleScroll}
          >
            <Combobox.Options>
              {comboboxOptions.length > 0 ? comboboxOptions : <Combobox.Empty>Nothing found...</Combobox.Empty>}
            </Combobox.Options>
          </Paper>
        )}
      </Combobox>
    </div>
  );
}

export default Slicer;
