// Purpose: Re-export generated TanStack Query factories — frontend consumers only.
// This file imports @tanstack/react-query, which is a React/frontend dependency.
// Do NOT import this from Node.js scripts or non-React code.
export {
  classGetOptions,
  classGetQueryKey,
  dictionaryGetOptions,
  dictionaryGetQueryKey,
  dictionaryClassesGetWithClassesOptions,
  dictionaryClassesGetWithClassesQueryKey,
  searchInDictionaryGetOptions,
  searchInDictionaryGetQueryKey,
} from './generated/@tanstack/react-query.gen';
