export interface IfcJsonEntity {
  type?: string;
}

export interface IfcEntity extends IfcJsonEntity {
  globalId?: string; // IfcGloballyUniqueId
  name?: string; // IfcLabel
  description?: string; // IfcText
  objectType?: string; // IfcLabel
  tag?: any; // IfcLabel
  predefinedType?: string; // Enumeration
  isDefinedBy?: IfcPropertySet[]; // (!) IfcRelDefines: RelatedObjects	 : 	SET [1:?] OF IfcObject;
  hasAssociations?: Association[];
}

export interface IfcClassification extends IfcJsonEntity {
  type: 'IfcClassification';
  source?: string; // IfcLabel IFC2x3 place for bSDD uri
  location: string; // IfcURIReference IFC4 place for bSDD uri
  edition?: string; // IfcLabel
  editionDate?: string; // IfcDate
  name?: string; // IfcLabel
  description?: string; // IfcText
  specification?: string; // IfcURIReference IFC4.3 place for bSDD uri
  referenceTokens?: string[]; // IfcIdentifier

  // inverse
  classificationForObjects?: any; // SET [0:?] OF IfcRelAssociatesClassification FOR RelatingClassification
  hasReferences?: any; // SET [0:?] OF IfcClassificationReference FOR ReferencedSource
}

export interface IfcExternalReference extends IfcJsonEntity {
  type: 'IfcExternalReference';
  location?: string; // IfcURIReference
  identification?: string; // IfcIdentifier
  name?: string; // IfcLabel

  // inverse
  externalReferenceForResources?: any; // SET [0:?] OF IfcExternalReferenceRelationship FOR RelatingReference
}
export interface IfcClassificationReference extends IfcExternalReference {
  type: 'IfcClassificationReference';
  location?: string; // IfcURIReference
  referencedSource?: IfcClassification; // IfcClassificationReferenceSelect
  description?: string; // IfcText
  sort?: string; // IfcIdentifier

  // inverse
  classificationRefForObjects?: any; // SET [0:?] OF IfcRelAssociatesClassification FOR RelatingClassification
  hasReferences?: any; // SET [0:?] OF IfcClassificationReference FOR ReferencedSource
}

interface IfcMaterial {
  type: 'IfcMaterial';
  name?: string; // IfcLabel
  description?: string; // IfcText
  category?: string; // IfcLabel
}

export type Association = IfcClassificationReference | IfcMaterial;

export interface IfcRoot extends IfcJsonEntity {
  type: 'IfcRoot';
  globalId?: string;
  ownerHistory?: any;
  name?: string; // IfcLabel
  description?: string; // IfcText
}
export interface IfcPropertyAbstraction extends IfcJsonEntity {
  type: 'IfcPropertyAbstraction';

  // inverse
  // HasExternalReferences: any; // SET [0:?] OF IfcExternalReferenceRelationship FOR RelatedResourceObjects
}

export interface IfcProperty extends IfcRoot {
  type: 'IfcProperty';
  name: string; // 	IfcIdentifier
  specification?: string; // IfcText

  // inverse
  partOfPset?: any; // SET [0:?] OF IfcPropertySet FOR HasProperties
  propertyForDependance?: any; // SET [0:?] OF IfcPropertyDependencyRelationship FOR DependingProperty
  propertyDependsOn?: any; // SET [0:?] OF IfcPropertyDependencyRelationship FOR DependantProperty
  partOfComplex?: any; // SET [0:?] OF IfcComplexProperty FOR HasProperties
  hasConstraints?: any; // SET [0:?] OF IfcResourceConstraintRelationship FOR RelatedResourceObjects
  hasApprovals?: any; // SET [0:?] OF IfcResourceApprovalRelationship FOR RelatedResourceObjects
}

export interface IfcPropertyDefinition extends IfcRoot {
  type: 'IfcPropertyDefinition';

  // inverse
  hasAssociations?: any; // SET OF IfcRelAssociates FOR RelatedObjects;
}

export interface IfcPropertySetDefinition extends IfcPropertyDefinition {
  type: 'IfcPropertySetDefinition';

  // inverse
  PropertyDefinitionOf?: any; // SET [0:1] OF IfcRelDefinesByProperties FOR RelatingPropertyDefinition;
  DefinesType?: any; // SET [0:1] OF IfcTypeObject FOR HasPropertySets;
}

export interface IfcPropertySet extends IfcPropertySetDefinition {
  type: 'IfcPropertySet';

  // inverse
  hasProperties: (IfcProperty | IfcPropertySingleValue | IfcPropertyEnumeratedValue)[]; // SET [1:?] OF IfcProperty;
}

export interface IfcSimpleProperty extends IfcProperty {
  type: 'IfcSimpleProperty';
}

export interface IfcPropertySingleValue extends IfcSimpleProperty {
  type: 'IfcPropertySingleValue';
  nominalValue?: any; // IfcValue
  unit?: any; // IfcUnit
}

export interface IfcPropertyEnumeratedValue extends IfcSimpleProperty {
  type: 'IfcPropertyEnumeratedValue';
  enumerationValues?: IfcValue[] | null; // LIST [1:?] OF IfcValue
  enumerationReference?: IfcPropertyEnumeration; // IfcPropertyEnumeration
}

export interface IfcPropertyEnumeration extends IfcPropertyAbstraction {
  type: 'IfcPropertyEnumeration';
  name: string; // IfcLabel
  enumerationValues: IfcValue[]; // LIST [1:?] OF UNIQUE IfcValue
  Unit?: any; // IfcUnit
}

export interface IfcValue extends IfcJsonEntity {
  type: string;
  value?: any;
}

export interface Option {
  label: string;
  value: string;
}
export interface PropertyCollection {
  name: string;
  bsddProperty: ClassificationPropertyContractV3;
  value?: any;
}
// export interface PropertySetCollection {
//   name: string;
//   properties: PropertyCollection[];
// }
