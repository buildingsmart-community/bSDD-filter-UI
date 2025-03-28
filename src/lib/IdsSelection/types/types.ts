export interface IdsInfoClass {
  title: string;
  copyright: string;
  version: string;
  description: string;
  author: string;
  date: Date;
  purpose: string;
  milestone: string[];
}

export interface IdsSimpleValue {
  simpleValue: string;
}

export interface IdsEntityClass {
  name: IdsSimpleValue;
}

export interface IdsApplicabilityClass {
  _minOccurs: string;
  _maxOccurs: string;
  entity: IdsEntityClass;
}

export interface IdsEnumerationClass {
  _value: string;
}

export interface IdsPropertyClass {
  _instructions: string;
  _dataType: string;
  propertySet: IdsSimpleValue;
  baseName: IdsSimpleValue;
  value?: {
    xs_restriction: {
      xs_enumeration: IdsEnumerationClass[];
    }
  }
}

export interface IdsSpecificationClass {
  _name: string;
  _description: string;
  applicability: IdsApplicabilityClass;
  requirements: {
    property: IdsPropertyClass[];
  };
}

export interface IdsClass {
  ids: {
    info: IdsInfoClass;
    specifications: {
      specification: IdsSpecificationClass [];
    };
  }
}