interface IfcClassification {
  type: 'IfcClassification'
  source?: string // IfcLabel
  edition?: string // IfcLabel
  editionDate?: string // IfcDate
  name: string // IfcLabel
  description?: string // IfcText
  Specification?: string // IfcURIReference
  referenceTokens?: string[] // IfcIdentifier
}

interface IfcClassificationReference {
  type: 'IfcClassificationReference'
  location?: string // IfcURIReference
  identification?: string // IfcIdentifier
  name?: string // IfcLabel
  referencedSource?: IfcClassification // IfcClassificationReferenceSelect
  description?: string // IfcText
  sort?: string // IfcIdentifier
}

interface IfcEntity {
  type?: string
  isDefinedBy?: any[]
  hasAssociations?: IfcClassificationReference[]
}
