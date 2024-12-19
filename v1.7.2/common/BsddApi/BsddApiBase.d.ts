export interface ClassContractV1 {
    /** URI of the dictionary */
    dictionaryUri?: string | null;
    /**
     * Date of activation
     * @format date-time
     */
    activationDateUtc: string;
    /**
     * Code used originally by the dictionary
     * @minLength 1
     */
    code: string;
    /** Language code of the creator */
    creatorLanguageCode?: string | null;
    /** List of countries where used */
    countriesOfUse?: string[] | null;
    /** Country of origin */
    countryOfOrigin?: string | null;
    /**
     * Date of deactivation
     * @format date-time
     */
    deActivationDateUtc?: string | null;
    /** Formal definition */
    definition?: string | null;
    /** Explanation of the deprecation */
    deprecationExplanation?: string | null;
    /** Description */
    description?: string | null;
    /** Reference to a(n official) document */
    documentReference?: string | null;
    /**
     * Name
     * @minLength 1
     */
    name: string;
    /**
     * Unique identification
     * @minLength 1
     */
    uri: string;
    /** List of codes of the replaced items */
    replacedObjectCodes?: string[] | null;
    /** List of codes of the replacing items */
    replacingObjectCodes?: string[] | null;
    /**
     * Date of the revision
     * @format date-time
     */
    revisionDateUtc?: string | null;
    /**
     * Revision number
     * @format int32
     */
    revisionNumber?: number | null;
    /**
     * Status, can be: Preview, Active or Inactive
     * @minLength 1
     */
    status: string;
    /** List of subdivisions (e.g. states) where used */
    subdivisionsOfUse?: string[] | null;
    /** Alternative unique global identification */
    uid?: string | null;
    /**
     * Date of the version
     * @format date-time
     */
    versionDateUtc: string;
    /**
     * Version number
     * @format int32
     */
    versionNumber?: number | null;
    /** URI of a visual representation */
    visualRepresentationUri?: string | null;
    /** Type of Class */
    classType?: string | null;
    /** Code that can be used for dictionary specific purposes */
    referenceCode?: string | null;
    /** List of synonyms for the class */
    synonyms?: string[] | null;
    /** List of related IFC entity names (version independent) */
    relatedIfcEntityNames?: string[] | null;
    parentClassReference?: ClassReferenceContractV1;
    /** List of the properties of this class */
    classProperties?: ClassPropertyContractV1[] | null;
    /** List of relations to other classes, can be reference to classes of other dictionaries */
    classRelations?: ClassRelationContractV1[] | null;
    /** List of child classes (only filled if requested) */
    childClassReferences?: ClassReferenceContractV1[] | null;
    /** List of relations of other classes to this class (only filled if requested) */
    reverseClassRelations?: ClassReverseRelationContractV1[] | null;
}
export interface ClassListItemContractV1 {
    uri?: string | null;
    code?: string | null;
    name?: string | null;
    classType?: string | null;
    referenceCode?: string | null;
    parentClassCode?: string | null;
    children?: ClassListItemContractV1[] | null;
}
export interface ClassPropertyContractV1 {
    /**
     * Name of the property
     * @minLength 1
     */
    name: string;
    uri?: string | null;
    /**
     * Plain language description of the property.
     * If at Property level no description has been given but a "Definition" is available, then "Definition" is returned as description
     */
    description?: string | null;
    /**
     * Definition of the property.
     * Description is same as definition if at Property level no description has been given.
     */
    definition?: string | null;
    /** Format for expressing the value of the property */
    dataType?: string | null;
    /**
     * Dimension of the physical quantity in format "L M T I Θ N J", for example "-2 1 0 0 0 0 0".
     * With
     *   L   Length
     *   M   Mass
     *   T   Time
     *   I   Electric current
     *   Θ   Thermodynamic Temperature
     *   N   Amount of substance
     *   J   Luminous intensity
     */
    dimension?: string | null;
    /**
     * The Length value of the dimension
     * @format int32
     */
    dimensionLength?: number | null;
    /**
     * The Mass value of the dimension
     * @format int32
     */
    dimensionMass?: number | null;
    /**
     * The Time value of the dimension
     * @format int32
     */
    dimensionTime?: number | null;
    /**
     * The Electric current value of the dimension
     * @format int32
     */
    dimensionElectricCurrent?: number | null;
    /**
     * The Thermodynamic temperature value of the dimension
     * @format int32
     */
    dimensionThermodynamicTemperature?: number | null;
    /**
     * The Amount of substance value of the dimension
     * @format int32
     */
    dimensionAmountOfSubstance?: number | null;
    /**
     * The Luminous intensity value of the dimension
     * @format int32
     */
    dimensionLuminousIntensity?: number | null;
    /**
     * List of codes of the properties which are parameters of the function for a dynamic property.
     * Only applicable for dynamic properties (IsDynamic)
     */
    dynamicParameterPropertyCodes?: string[] | null;
    /** Illustrate possible use or values of the Property */
    example?: string | null;
    /** True if the value of this property is dependent on other properties (as provided in DynamicParameterPropertyCodes) */
    isDynamic?: boolean | null;
    /** Indicates if this property is required for the class */
    isRequired?: boolean | null;
    /** Indicates if the value of the property can be changed by the user */
    isWritable?: boolean | null;
    /**
     * Maximum value of the property, exclusive
     * This value does not need to be the same as the MaxExclusive in the Property contract
     * because this value can be overruled at Class-Property level to define a more strict value.
     * @format double
     */
    maxExclusive?: number | null;
    /**
     * Maximum value of the property, inclusive
     * This value does not need to be the same as the MaxInclusive in the Property contract
     * because this value can be overruled at Class-Property level to define a more strict value.
     * @format double
     */
    maxInclusive?: number | null;
    /**
     * Minimum value of the property, exclusive
     * This value does not need to be the same as the MinExclusive in the Property contract
     * because this value can be overruled at Class-Property level to define a more strict value.
     * @format double
     */
    minExclusive?: number | null;
    /**
     * Minimum value of the property, inclusive
     * This value does not need to be the same as the MinInclusive in the Property contract
     * because this value can be overruled at Class-Property level to define a more strict value.
     * @format double
     */
    minInclusive?: number | null;
    /**
     * An XML Schema Regular expression for the property value.
     * See for explanation: https://www.regular-expressions.info/xml.html.
     * This value does not need to be the same as the Pattern in the Property contract
     * because this value can be overruled at Class-Property level to define a more strict value.
     */
    pattern?: string | null;
    /** The quantity in plain text */
    physicalQuantity?: string | null;
    /**
     * List of allowed values
     * This list does not need to be the same as the list of AllowedValues in the Property contract
     * because this list can be overruled at Class-Property level to define a more strict list.
     */
    allowedValues?: ClassPropertyValueContractV1[] | null;
    /** Predefined value: if the class can have only one value for this property, this is it */
    predefinedValue?: string | null;
    /** Code of the property, only applicable if property is of the same dictionary as the class. */
    propertyCode?: string | null;
    /** Name of the Dictionary this property belongs to */
    propertyDictionaryName?: string | null;
    /** Uri of the Dictionary this property belongs to */
    propertyDictionaryUri?: string | null;
    /** Unique identification of the property */
    propertyUri?: string | null;
    /** Name of the Property Set */
    propertySet?: string | null;
    /** Status of the property: Preview, Active or Inactive */
    propertyStatus?: string | null;
    /** Indicates kind of value: Single, Range (2 values expected), List (multiple values expected), Complex (use in combination with "ConnectedProperties"), ComplexList */
    propertyValueKind?: string | null;
    /** Symbol of the property */
    symbol?: string | null;
    /** List of units to select from */
    units?: string[] | null;
    /** List of QUDT unit codes to select from */
    qudtCodes?: string[] | null;
}
export interface ClassPropertyValueContractV1 {
    /** Globally unique identification of the value */
    uri?: string | null;
    /** Identification of the value */
    code?: string | null;
    /**
     * Allowed value of the property
     * @minLength 1
     */
    value: string;
    /** Description of the value */
    description?: string | null;
    /**
     * Sort number of value within the list of values for the Property
     * @format int32
     */
    sortNumber?: number | null;
}
export interface ClassReferenceContractV1 {
    /** @minLength 1 */
    uri: string;
    name?: string | null;
    code?: string | null;
}
export interface ClassRelationContractV1 {
    uri?: string | null;
    /**
     * Can be one of: HasReference, IsEqualTo, IsSynonymOf, IsParentOf, IsChildOf, HasPart
     * @minLength 1
     */
    relationType: string;
    /**
     * Namespace URI of the related class
     * @minLength 1
     */
    relatedClassUri: string;
    /** Name of the related class */
    relatedClassName?: string | null;
    /**
     * Optional provision of a fraction of the total amount (e.g. volume or weight) that applies to the class relations of one relation type
     * @format double
     */
    fraction?: number | null;
}
export interface ClassReverseRelationContractV1 {
    /**
     * Can be one of: HasReference, IsEqualTo, IsSynonymOf, IsParentOf, IsChildOf, HasPart
     * @minLength 1
     */
    relationType: string;
    /**
     * URI of the reverse related class
     * @minLength 1
     */
    classUri: string;
    /** Name of the reverse related class */
    className?: string | null;
    /**
     * Optional provision of a fraction of the total amount (e.g. volume or weight) that applies to the class relations of one relation type
     * @format double
     */
    fraction?: number | null;
    /** The URI of the dictionary that contains the reverse related class. This URI can be used to retrieve the dictionary */
    dictionaryUri?: string | null;
}
export interface ClassSearchResponseClassContractV1 {
    /** Unique identification of the dictionary the class belongs to */
    dictionaryUri?: string | null;
    /** Name of the dictionary the class belongs to */
    dictionaryName?: string | null;
    /** Name of the class */
    name?: string | null;
    /** Code that can be used for dictionary specific purposes */
    referenceCode?: string | null;
    /** Unique identification of the class */
    uri?: string | null;
    /** Type of the class */
    classType?: string | null;
    description?: string | null;
    parentClassName?: string | null;
    relatedIfcEntityNames?: string[] | null;
}
export interface ClassSearchResponseContractV1 {
    /** @format int32 */
    totalCount?: number;
    /** @format int32 */
    offset?: number;
    /** @format int32 */
    count?: number;
    /** The list of Classes found */
    classes?: ClassSearchResponseClassContractV1[] | null;
}
export interface ClassSearchResultContractV1 {
    /** Name of the Class */
    name?: string | null;
    /** Unique identification of the Class */
    uri?: string | null;
    /** Code that can be used for domain specific purposes */
    referenceCode?: string | null;
    /** Type of the class */
    classType?: string | null;
    definition?: string | null;
    synonyms?: string[] | null;
}
export interface ClassificationContractV3 {
    /** Namespace URI of the domain */
    domainNamespaceUri?: string | null;
    /**
     * Date of activation
     * @format date-time
     */
    activationDateUtc: string;
    /**
     * Code used originally by the domain
     * @minLength 1
     */
    code: string;
    /** Language code of the creator */
    creatorLanguageCode?: string | null;
    /** List of countries where used */
    countriesOfUse?: string[] | null;
    /** Country of origin */
    countryOfOrigin?: string | null;
    /**
     * Date of deactivation
     * @format date-time
     */
    deActivationDateUtc?: string | null;
    /** Definition */
    definition?: string | null;
    /** Explanation of the deprecation */
    deprecationExplanation?: string | null;
    /** Reference to a(n official) document */
    documentReference?: string | null;
    /**
     * Name
     * @minLength 1
     */
    name: string;
    /**
     * Unique identification
     * @minLength 1
     */
    namespaceUri: string;
    /** List of codes of the replaced items */
    replacedObjectCodes?: string[] | null;
    /** List of codes of the replacing items */
    replacingObjectCodes?: string[] | null;
    /**
     * Date of the revision
     * @format date-time
     */
    revisionDateUtc?: string | null;
    /**
     * Revision number
     * @format int32
     */
    revisionNumber?: number | null;
    /**
     * Status, can be: Preview, Active or Inactive
     * @minLength 1
     */
    status: string;
    /** List of subdivisions (e.g. states) where used */
    subdivisionsOfUse?: string[] | null;
    /** Alternative unique global identification */
    uid?: string | null;
    /**
     * Date of the version
     * @format date-time
     */
    versionDateUtc: string;
    /**
     * Version number
     * @format int32
     */
    versionNumber?: number | null;
    /** URI of a visual representation */
    visualRepresentationUri?: string | null;
    /** Type of Classification */
    classificationType?: string | null;
    /** Code that can be used for domain specific purposes */
    referenceCode?: string | null;
    /** List of synonyms for the classification */
    synonyms?: string[] | null;
    /** List of related IFC entity names (version independent) */
    relatedIfcEntityNames?: string[] | null;
    parentClassificationReference?: ClassificationReferenceContractV3;
    /** List of the properties of this classification */
    classificationProperties?: ClassificationPropertyContractV3[] | null;
    /** List of relations to other classifications, can be reference to classifications of other domains */
    classificationRelations?: ClassificationRelationContractV3[] | null;
    /** List of child classifications (only filled if requested) */
    childClassificationReferences?: ClassificationReferenceContractV3[] | null;
}
export interface ClassificationContractV4 {
    /** Namespace URI of the domain */
    domainNamespaceUri?: string | null;
    /**
     * Date of activation
     * @format date-time
     */
    activationDateUtc: string;
    /**
     * Code used originally by the domain
     * @minLength 1
     */
    code: string;
    /** Language code of the creator */
    creatorLanguageCode?: string | null;
    /** List of countries where used */
    countriesOfUse?: string[] | null;
    /** Country of origin */
    countryOfOrigin?: string | null;
    /**
     * Date of deactivation
     * @format date-time
     */
    deActivationDateUtc?: string | null;
    /** Definition */
    definition?: string | null;
    /** Explanation of the deprecation */
    deprecationExplanation?: string | null;
    /** Reference to a(n official) document */
    documentReference?: string | null;
    /**
     * Name
     * @minLength 1
     */
    name: string;
    /**
     * Unique identification
     * @minLength 1
     */
    namespaceUri: string;
    /** List of codes of the replaced items */
    replacedObjectCodes?: string[] | null;
    /** List of codes of the replacing items */
    replacingObjectCodes?: string[] | null;
    /**
     * Date of the revision
     * @format date-time
     */
    revisionDateUtc?: string | null;
    /**
     * Revision number
     * @format int32
     */
    revisionNumber?: number | null;
    /**
     * Status, can be: Preview, Active or Inactive
     * @minLength 1
     */
    status: string;
    /** List of subdivisions (e.g. states) where used */
    subdivisionsOfUse?: string[] | null;
    /** Alternative unique global identification */
    uid?: string | null;
    /**
     * Date of the version
     * @format date-time
     */
    versionDateUtc: string;
    /**
     * Version number
     * @format int32
     */
    versionNumber?: number | null;
    /** URI of a visual representation */
    visualRepresentationUri?: string | null;
    /** Type of Classification */
    classificationType?: string | null;
    /** Code that can be used for domain specific purposes */
    referenceCode?: string | null;
    /** List of synonyms for the classification */
    synonyms?: string[] | null;
    /** List of related IFC entity names (version independent) */
    relatedIfcEntityNames?: string[] | null;
    parentClassificationReference?: ClassificationReferenceContractV4;
    /** List of the properties of this classification */
    classificationProperties?: ClassificationPropertyContractV4[] | null;
    /** List of relations to other classifications, can be reference to classifications of other domains */
    classificationRelations?: ClassificationRelationContractV4[] | null;
    /** List of child classifications (only filled if requested) */
    childClassificationReferences?: ClassificationReferenceContractV4[] | null;
}
export interface ClassificationListItemContractV2 {
    namespaceUri?: string | null;
    code?: string | null;
    name?: string | null;
    referenceCode?: string | null;
    parentClassificationCode?: string | null;
    children?: ClassificationListItemContractV2[] | null;
}
export interface ClassificationListItemContractV3 {
    namespaceUri?: string | null;
    code?: string | null;
    name?: string | null;
    referenceCode?: string | null;
    parentClassificationCode?: string | null;
    children?: ClassificationListItemContractV3[] | null;
}
export interface ClassificationPropertyContractV3 {
    /**
     * Name of the property
     * @minLength 1
     */
    name: string;
    /**
     * Plain language description of the property.
     * If at Property level no description has been given but a "Definition" is available, then "Definition" is returned as description
     */
    description?: string | null;
    /** Format for expressing the value of the property */
    dataType?: string | null;
    /**
     * Dimension of the physical quantity in format "L M T I Θ N J", for example "-2 1 0 0 0 0 0".
     * With
     *   L   Length
     *   M   Mass
     *   T   Time
     *   I   Electric current
     *   Θ   Thermodynamic Temperature
     *   N   Amount of substance
     *   J   Luminous intensity
     */
    dimension?: string | null;
    /**
     * The Length value of the dimension
     * @format int32
     */
    dimensionLength?: number | null;
    /**
     * The Mass value of the dimension
     * @format int32
     */
    dimensionMass?: number | null;
    /**
     * The Time value of the dimension
     * @format int32
     */
    dimensionTime?: number | null;
    /**
     * The Electric current value of the dimension
     * @format int32
     */
    dimensionElectricCurrent?: number | null;
    /**
     * The Thermodynamic temperature value of the dimension
     * @format int32
     */
    dimensionThermodynamicTemperature?: number | null;
    /**
     * The Amount of substance value of the dimension
     * @format int32
     */
    dimensionAmountOfSubstance?: number | null;
    /**
     * The Luminous intensity value of the dimension
     * @format int32
     */
    dimensionLuminousIntensity?: number | null;
    /**
     * List of codes of the properties which are parameters of the function for a dynamic property.
     * Only applicable for dynamic properties (IsDynamic)
     */
    dynamicParameterPropertyCodes?: string[] | null;
    /** Illustrate possible use or values of the Property */
    example?: string | null;
    /** True if the value of this property is dependent on other properties (as provided in DynamicParameterPropertyCodes) */
    isDynamic?: boolean | null;
    /** Indicates if this property is required for the classification */
    isRequired?: boolean | null;
    /** Indicates if the value of the property can be changed by the user */
    isWritable?: boolean | null;
    /**
     * Maximum value of the property, exclusive
     * This value does not need to be the same as the MaxExclusive in the Property contract
     * because this value can be overruled at Classification-Property level to define a more strict value.
     * @format double
     */
    maxExclusive?: number | null;
    /**
     * Maximum value of the property, inclusive
     * This value does not need to be the same as the MaxInclusive in the Property contract
     * because this value can be overruled at Classification-Property level to define a more strict value.
     * @format double
     */
    maxInclusive?: number | null;
    /**
     * Minimum value of the property, exclusive
     * This value does not need to be the same as the MinExclusive in the Property contract
     * because this value can be overruled at Classification-Property level to define a more strict value.
     * @format double
     */
    minExclusive?: number | null;
    /**
     * Minimum value of the property, inclusive
     * This value does not need to be the same as the MinInclusive in the Property contract
     * because this value can be overruled at Classification-Property level to define a more strict value.
     * @format double
     */
    minInclusive?: number | null;
    /**
     * An XML Schema Regular expression for the property value.
     * See for explanation: https://www.regular-expressions.info/xml.html.
     * This value does not need to be the same as the Pattern in the Property contract
     * because this value can be overruled at Classification-Property level to define a more strict value.
     */
    pattern?: string | null;
    /** The quantity in plain text */
    physicalQuantity?: string | null;
    /**
     * List of possible values
     * This list does not need to be the same as the list of PossibleValues in the Property contract
     * because this list can be overruled at Classification-Property level to define a more strict list.
     */
    possibleValues?: ClassificationPropertyValueContractV3[] | null;
    /** Predefined value: if the classification can have only one value for this property, this is it */
    predefinedValue?: string | null;
    /** Code of the property, only applicable if property is of the same domain as the classification. */
    propertyCode?: string | null;
    /** Name of the Domain this property belongs to */
    propertyDomainName?: string | null;
    /** Unique identification of the property */
    propertyNamespaceUri?: string | null;
    /** Name of the Property Set */
    propertySet?: string | null;
    /** Status of the property: Preview, Active or Inactive */
    propertyStatus?: string | null;
    /** Indicates kind of value: Single, Range (2 values expected), List (multiple values expected), Complex (use in combination with "ConnectedProperties"), ComplexList */
    propertyValueKind?: string | null;
    /** Symbol of the property */
    symbol?: string | null;
    /** List of units to select from */
    units?: string[] | null;
    /** List of QUDT unit codes to select from */
    qudtCodes?: string[] | null;
}
export interface ClassificationPropertyContractV4 {
    /**
     * Name of the property
     * @minLength 1
     */
    name: string;
    namespaceUri?: string | null;
    /**
     * Plain language description of the property.
     * If at Property level no description has been given but a "Definition" is available, then "Definition" is returned as description
     */
    description?: string | null;
    /** Format for expressing the value of the property */
    dataType?: string | null;
    /**
     * Dimension of the physical quantity in format "L M T I Θ N J", for example "-2 1 0 0 0 0 0".
     * With
     *   L   Length
     *   M   Mass
     *   T   Time
     *   I   Electric current
     *   Θ   Thermodynamic Temperature
     *   N   Amount of substance
     *   J   Luminous intensity
     */
    dimension?: string | null;
    /**
     * The Length value of the dimension
     * @format int32
     */
    dimensionLength?: number | null;
    /**
     * The Mass value of the dimension
     * @format int32
     */
    dimensionMass?: number | null;
    /**
     * The Time value of the dimension
     * @format int32
     */
    dimensionTime?: number | null;
    /**
     * The Electric current value of the dimension
     * @format int32
     */
    dimensionElectricCurrent?: number | null;
    /**
     * The Thermodynamic temperature value of the dimension
     * @format int32
     */
    dimensionThermodynamicTemperature?: number | null;
    /**
     * The Amount of substance value of the dimension
     * @format int32
     */
    dimensionAmountOfSubstance?: number | null;
    /**
     * The Luminous intensity value of the dimension
     * @format int32
     */
    dimensionLuminousIntensity?: number | null;
    /**
     * List of codes of the properties which are parameters of the function for a dynamic property.
     * Only applicable for dynamic properties (IsDynamic)
     */
    dynamicParameterPropertyCodes?: string[] | null;
    /** Illustrate possible use or values of the Property */
    example?: string | null;
    /** True if the value of this property is dependent on other properties (as provided in DynamicParameterPropertyCodes) */
    isDynamic?: boolean | null;
    /** Indicates if this property is required for the classification */
    isRequired?: boolean | null;
    /** Indicates if the value of the property can be changed by the user */
    isWritable?: boolean | null;
    /**
     * Maximum value of the property, exclusive
     * This value does not need to be the same as the MaxExclusive in the Property contract
     * because this value can be overruled at Classification-Property level to define a more strict value.
     * @format double
     */
    maxExclusive?: number | null;
    /**
     * Maximum value of the property, inclusive
     * This value does not need to be the same as the MaxInclusive in the Property contract
     * because this value can be overruled at Classification-Property level to define a more strict value.
     * @format double
     */
    maxInclusive?: number | null;
    /**
     * Minimum value of the property, exclusive
     * This value does not need to be the same as the MinExclusive in the Property contract
     * because this value can be overruled at Classification-Property level to define a more strict value.
     * @format double
     */
    minExclusive?: number | null;
    /**
     * Minimum value of the property, inclusive
     * This value does not need to be the same as the MinInclusive in the Property contract
     * because this value can be overruled at Classification-Property level to define a more strict value.
     * @format double
     */
    minInclusive?: number | null;
    /**
     * An XML Schema Regular expression for the property value.
     * See for explanation: https://www.regular-expressions.info/xml.html.
     * This value does not need to be the same as the Pattern in the Property contract
     * because this value can be overruled at Classification-Property level to define a more strict value.
     */
    pattern?: string | null;
    /** The quantity in plain text */
    physicalQuantity?: string | null;
    /**
     * List of allowed values
     * This list does not need to be the same as the list of AllowedValues in the Property contract
     * because this list can be overruled at Classification-Property level to define a more strict list.
     */
    allowedValues?: ClassificationPropertyValueContractV4[] | null;
    /** Predefined value: if the classification can have only one value for this property, this is it */
    predefinedValue?: string | null;
    /** Code of the property, only applicable if property is of the same domain as the classification. */
    propertyCode?: string | null;
    /** Name of the Domain this property belongs to */
    propertyDomainName?: string | null;
    /** Unique identification of the property */
    propertyNamespaceUri?: string | null;
    /** Name of the Property Set */
    propertySet?: string | null;
    /** Status of the property: Preview, Active or Inactive */
    propertyStatus?: string | null;
    /** Indicates kind of value: Single, Range (2 values expected), List (multiple values expected), Complex (use in combination with "ConnectedProperties"), ComplexList */
    propertyValueKind?: string | null;
    /** Symbol of the property */
    symbol?: string | null;
    /** List of units to select from */
    units?: string[] | null;
    /** List of QUDT unit codes to select from */
    qudtCodes?: string[] | null;
}
export interface ClassificationPropertyValueContractV3 {
    /** Globally unique identification of the value (if present) */
    namespaceUri?: string | null;
    /** Identification of the value */
    code?: string | null;
    /**
     * Possible value of the property
     * @minLength 1
     */
    value: string;
    /** Description of the value */
    description?: string | null;
    /**
     * Sort number of value within the list of values for the Property
     * @format int32
     */
    sortNumber?: number | null;
}
export interface ClassificationPropertyValueContractV4 {
    /** Globally unique identification of the value (if present) */
    namespaceUri?: string | null;
    /** Identification of the value */
    code?: string | null;
    /**
     * Allowed value of the property
     * @minLength 1
     */
    value: string;
    /** Description of the value */
    description?: string | null;
    /**
     * Sort number of value within the list of values for the Property
     * @format int32
     */
    sortNumber?: number | null;
}
export interface ClassificationReferenceContractV3 {
    /** @minLength 1 */
    namespaceUri: string;
    name?: string | null;
    code?: string | null;
}
export interface ClassificationReferenceContractV4 {
    /** @minLength 1 */
    namespaceUri: string;
    name?: string | null;
    code?: string | null;
}
export interface ClassificationRelationContractV3 {
    /**
     * Can be one of: HasReference, IsEqualTo, IsSynonymOf, IsParentOf, IsChildOf, HasPart
     * @minLength 1
     */
    relationType: string;
    /**
     * Namespace URI of the related classification
     * @minLength 1
     */
    relatedClassificationUri: string;
    /** Name of the related classification */
    relatedClassificationName?: string | null;
    /**
     * Optional provision of a fraction of the total amount (e.g. volume or weight) that applies to the classification relations of one relation type
     * @format double
     */
    fraction?: number | null;
}
export interface ClassificationRelationContractV4 {
    namespaceUri?: string | null;
    /**
     * Can be one of: HasReference, IsEqualTo, IsSynonymOf, IsParentOf, IsChildOf, HasPart
     * @minLength 1
     */
    relationType: string;
    /**
     * Namespace URI of the related classification
     * @minLength 1
     */
    relatedClassificationUri: string;
    /** Name of the related classification */
    relatedClassificationName?: string | null;
    /**
     * Optional provision of a fraction of the total amount (e.g. volume or weight) that applies to the classification relations of one relation type
     * @format double
     */
    fraction?: number | null;
}
export interface ClassificationSearchResponseClassificationContractV1 {
    /** Unique identification of the domain the classification belongs to */
    domainNamespaceUri?: string | null;
    /** Name of the domain the classification belongs to */
    domainName?: string | null;
    name?: string | null;
    /** Code that can be used for domain specific purposes */
    referenceCode?: string | null;
    /** Unique identification of the classification */
    namespaceUri?: string | null;
    /** Type of the classification. */
    classificationType?: string | null;
    description?: string | null;
    parentClassificationName?: string | null;
    relatedIfcEntityNames?: string[] | null;
}
export interface ClassificationSearchResponseContractV1 {
    /** The list of Classifications found */
    classifications?: ClassificationSearchResponseClassificationContractV1[] | null;
}
export interface ClassificationSearchResultContractV2 {
    /** Name of the Classification */
    name?: string | null;
    /** Unique identification of the Classification */
    namespaceUri?: string | null;
    /** Code that can be used for dictionary specific purposes */
    referenceCode?: string | null;
    /** Type of the classification. */
    classificationType?: string | null;
    definition?: string | null;
    synonyms?: string[] | null;
}
export interface CountryContractV1 {
    code?: string | null;
    name?: string | null;
}
export interface DictionaryClassesResponseContractV1 {
    /** @minLength 1 */
    uri: string;
    /** @minLength 1 */
    name: string;
    /** @minLength 1 */
    version: string;
    /** @minLength 1 */
    organizationCodeOwner: string;
    /** @minLength 1 */
    organizationNameOwner: string;
    /**
     * The default language for this domain
     * @minLength 1
     */
    defaultLanguageCode: string;
    /** Name or short description of the license under which you can use this data */
    license?: string | null;
    /** URL where you can find more details about the license */
    licenseUrl?: string | null;
    /** Name or short description of the quality assurance procedure used while creating and maintaining the domain data */
    qualityAssuranceProcedure?: string | null;
    /** URL where you can find more details about the quality assurance procedure */
    qualityAssuranceProcedureUrl?: string | null;
    /** For state indication, like "Preview", "Active", "InActive", "Released */
    status?: string | null;
    /** Url to site with more info on domain */
    moreInfoUrl?: string | null;
    /**
     * Date of the release of this version
     * @format date-time
     */
    releaseDate?: string | null;
    /**
     * Date and time the data of the domain has been last updated in bSDD
     * @format date-time
     */
    lastUpdatedUtc?: string;
    classes?: ClassListItemContractV1[] | null;
    /**
     * Total number of classes within the dictionary.
     * @format int32
     */
    classesTotalCount?: number | null;
    /** @format int32 */
    classesOffset?: number | null;
    /**
     * The returned number of classes.
     * @format int32
     */
    classesCount?: number | null;
}
export interface DictionaryContractV1 {
    /** @minLength 1 */
    uri: string;
    /** @minLength 1 */
    name: string;
    /** @minLength 1 */
    version: string;
    /** @minLength 1 */
    organizationCodeOwner: string;
    /** @minLength 1 */
    organizationNameOwner: string;
    /**
     * The default language for this domain
     * @minLength 1
     */
    defaultLanguageCode: string;
    /** Name or short description of the license under which you can use this data */
    license?: string | null;
    /** URL where you can find more details about the license */
    licenseUrl?: string | null;
    /** Name or short description of the quality assurance procedure used while creating and maintaining the domain data */
    qualityAssuranceProcedure?: string | null;
    /** URL where you can find more details about the quality assurance procedure */
    qualityAssuranceProcedureUrl?: string | null;
    /** For state indication, like "Preview", "Active", "InActive", "Released */
    status?: string | null;
    /** Url to site with more info on domain */
    moreInfoUrl?: string | null;
    /**
     * Date of the release of this version
     * @format date-time
     */
    releaseDate?: string | null;
    /**
     * Date and time the data of the domain has been last updated in bSDD
     * @format date-time
     */
    lastUpdatedUtc?: string;
}
export interface DictionaryPropertiesResponseContractV1 {
    /** @minLength 1 */
    uri: string;
    /** @minLength 1 */
    name: string;
    /** @minLength 1 */
    version: string;
    /** @minLength 1 */
    organizationCodeOwner: string;
    /** @minLength 1 */
    organizationNameOwner: string;
    /**
     * The default language for this domain
     * @minLength 1
     */
    defaultLanguageCode: string;
    /** Name or short description of the license under which you can use this data */
    license?: string | null;
    /** URL where you can find more details about the license */
    licenseUrl?: string | null;
    /** Name or short description of the quality assurance procedure used while creating and maintaining the domain data */
    qualityAssuranceProcedure?: string | null;
    /** URL where you can find more details about the quality assurance procedure */
    qualityAssuranceProcedureUrl?: string | null;
    /** For state indication, like "Preview", "Active", "InActive", "Released */
    status?: string | null;
    /** Url to site with more info on domain */
    moreInfoUrl?: string | null;
    /**
     * Date of the release of this version
     * @format date-time
     */
    releaseDate?: string | null;
    /**
     * Date and time the data of the domain has been last updated in bSDD
     * @format date-time
     */
    lastUpdatedUtc?: string;
    properties?: PropertyListItemContractV1[] | null;
    /**
     * Total number of properties within the dictionary.
     * @format int32
     */
    propertiesTotalCount?: number;
    /** @format int32 */
    propertiesOffset?: number;
    /**
     * The returned number of properties.
     * @format int32
     */
    propertiesCount?: number;
}
export interface DictionaryResponseContractV1 {
    /** @format int32 */
    totalCount?: number;
    /** @format int32 */
    offset?: number;
    /** @format int32 */
    count?: number;
    dictionaries?: DictionaryContractV1[] | null;
}
export interface DictionarySearchResultContractV1 {
    name?: string | null;
    uri?: string | null;
    classes?: ClassSearchResultContractV1[] | null;
}
export interface DomainContractV2 {
    namespaceUri?: string | null;
    /** @minLength 1 */
    name: string;
    /** @minLength 1 */
    version: string;
    /** @minLength 1 */
    organizationNameOwner: string;
    /**
     * The default language for this domain
     * @minLength 1
     */
    defaultLanguageCode: string;
    /** Name or short description of the license under which you can use this data */
    license?: string | null;
    /** URL where you can find more details about the license */
    licenseUrl?: string | null;
    /** Name or short description of the quality assurance procedure used while creating and maintaining the domain data */
    qualityAssuranceProcedure?: string | null;
    /** URL where you can find more details about the quality assurance procedure */
    qualityAssuranceProcedureUrl?: string | null;
    /** For state indication, like "Preview", "Active", "InActive", "Released */
    status?: string | null;
    /** Url to site with more info on domain */
    moreInfoUrl?: string | null;
    /**
     * Date of the release of this version
     * @format date-time
     */
    releaseDate?: string | null;
    /**
     * Date and time the data of the domain has been last updated in bSDD
     * @format date-time
     */
    lastUpdatedUtc?: string;
}
export interface DomainContractV3 {
    namespaceUri?: string | null;
    /** @minLength 1 */
    name: string;
    /** @minLength 1 */
    version: string;
    /** @minLength 1 */
    organizationCodeOwner: string;
    /** @minLength 1 */
    organizationNameOwner: string;
    /**
     * The default language for this domain
     * @minLength 1
     */
    defaultLanguageCode: string;
    /** Name or short description of the license under which you can use this data */
    license?: string | null;
    /** URL where you can find more details about the license */
    licenseUrl?: string | null;
    /** Name or short description of the quality assurance procedure used while creating and maintaining the domain data */
    qualityAssuranceProcedure?: string | null;
    /** URL where you can find more details about the quality assurance procedure */
    qualityAssuranceProcedureUrl?: string | null;
    /** For state indication, like "Preview", "Active", "InActive", "Released */
    status?: string | null;
    /** Url to site with more info on domain */
    moreInfoUrl?: string | null;
    /**
     * Date of the release of this version
     * @format date-time
     */
    releaseDate?: string | null;
    /**
     * Date and time the data of the domain has been last updated in bSDD
     * @format date-time
     */
    lastUpdatedUtc?: string;
}
export interface DomainSearchResultContractV1 {
    name?: string | null;
    namespaceUri?: string | null;
    materials?: MaterialSearchResultContractV1[] | null;
}
export interface DomainSearchResultContractV2 {
    name?: string | null;
    namespaceUri?: string | null;
    classifications?: ClassificationSearchResultContractV2[] | null;
}
export interface DomainWithClassificationsContractV2 {
    namespaceUri?: string | null;
    /** @minLength 1 */
    name: string;
    /** @minLength 1 */
    version: string;
    /** @minLength 1 */
    organizationNameOwner: string;
    /**
     * The default language for this domain
     * @minLength 1
     */
    defaultLanguageCode: string;
    /** Name or short description of the license under which you can use this data */
    license?: string | null;
    /** URL where you can find more details about the license */
    licenseUrl?: string | null;
    /** Name or short description of the quality assurance procedure used while creating and maintaining the domain data */
    qualityAssuranceProcedure?: string | null;
    /** URL where you can find more details about the quality assurance procedure */
    qualityAssuranceProcedureUrl?: string | null;
    /** For state indication, like "Preview", "Active", "InActive", "Released */
    status?: string | null;
    /** Url to site with more info on domain */
    moreInfoUrl?: string | null;
    /**
     * Date of the release of this version
     * @format date-time
     */
    releaseDate?: string | null;
    /**
     * Date and time the data of the domain has been last updated in bSDD
     * @format date-time
     */
    lastUpdatedUtc?: string;
    classifications?: ClassificationListItemContractV2[] | null;
}
export interface DomainWithClassificationsContractV3 {
    namespaceUri?: string | null;
    /** @minLength 1 */
    name: string;
    /** @minLength 1 */
    version: string;
    /** @minLength 1 */
    organizationCodeOwner: string;
    /** @minLength 1 */
    organizationNameOwner: string;
    /**
     * The default language for this domain
     * @minLength 1
     */
    defaultLanguageCode: string;
    /** Name or short description of the license under which you can use this data */
    license?: string | null;
    /** URL where you can find more details about the license */
    licenseUrl?: string | null;
    /** Name or short description of the quality assurance procedure used while creating and maintaining the domain data */
    qualityAssuranceProcedure?: string | null;
    /** URL where you can find more details about the quality assurance procedure */
    qualityAssuranceProcedureUrl?: string | null;
    /** For state indication, like "Preview", "Active", "InActive", "Released */
    status?: string | null;
    /** Url to site with more info on domain */
    moreInfoUrl?: string | null;
    /**
     * Date of the release of this version
     * @format date-time
     */
    releaseDate?: string | null;
    /**
     * Date and time the data of the domain has been last updated in bSDD
     * @format date-time
     */
    lastUpdatedUtc?: string;
    classifications?: ClassificationListItemContractV3[] | null;
    materials?: ClassificationListItemContractV3[] | null;
}
export interface LanguageContractV1 {
    /** @minLength 1 */
    isoCode: string;
    name?: string | null;
}
export interface MaterialClassificationRelationContractV1 {
    name?: string | null;
    namespaceUri?: string | null;
}
export interface MaterialContractV1 {
    /** Namespace URI of the domain */
    domainNamespaceUri?: string | null;
    /**
     * Date of activation
     * @format date-time
     */
    activationDateUtc: string;
    /**
     * Code used originally by the domain
     * @minLength 1
     */
    code: string;
    /** Language code of the creator */
    creatorLanguageCode?: string | null;
    /** List of countries where used */
    countriesOfUse?: string[] | null;
    /** Country of origin */
    countryOfOrigin?: string | null;
    /**
     * Date of deactivation
     * @format date-time
     */
    deActivationDateUtc?: string | null;
    /** Definition */
    definition?: string | null;
    /** Explanation of the deprecation */
    deprecationExplanation?: string | null;
    /** Reference to a(n official) document */
    documentReference?: string | null;
    /**
     * Name
     * @minLength 1
     */
    name: string;
    /**
     * Unique identification
     * @minLength 1
     */
    namespaceUri: string;
    /** List of codes of the replaced items */
    replacedObjectCodes?: string[] | null;
    /** List of codes of the replacing items */
    replacingObjectCodes?: string[] | null;
    /**
     * Date of the revision
     * @format date-time
     */
    revisionDateUtc?: string | null;
    /**
     * Revision number
     * @format int32
     */
    revisionNumber?: number | null;
    /**
     * Status, can be: Preview, Active or Inactive
     * @minLength 1
     */
    status: string;
    /** List of subdivisions (e.g. states) where used */
    subdivisionsOfUse?: string[] | null;
    /** Alternative unique global identification */
    uid?: string | null;
    /**
     * Date of the version
     * @format date-time
     */
    versionDateUtc: string;
    /**
     * Version number
     * @format int32
     */
    versionNumber?: number | null;
    /** URI of a visual representation */
    visualRepresentationUri?: string | null;
    /** List of synonyms for the material */
    synonyms?: string[] | null;
    parentMaterialReference?: MaterialReferenceContractV1;
    /** List of the properties of this material */
    materialProperties?: MaterialPropertyContractV1[] | null;
    /** List of relations to classifications, can be reference to materials of other domains */
    classificationRelations?: MaterialRelationContractV1[] | null;
    /** List of child materials (only filled if requested) */
    childMaterialReferences?: MaterialReferenceContractV1[] | null;
}
export interface MaterialContractV2 {
    /** Namespace URI of the domain */
    domainNamespaceUri?: string | null;
    /**
     * Date of activation
     * @format date-time
     */
    activationDateUtc: string;
    /**
     * Code used originally by the domain
     * @minLength 1
     */
    code: string;
    /** Language code of the creator */
    creatorLanguageCode?: string | null;
    /** List of countries where used */
    countriesOfUse?: string[] | null;
    /** Country of origin */
    countryOfOrigin?: string | null;
    /**
     * Date of deactivation
     * @format date-time
     */
    deActivationDateUtc?: string | null;
    /** Definition */
    definition?: string | null;
    /** Explanation of the deprecation */
    deprecationExplanation?: string | null;
    /** Reference to a(n official) document */
    documentReference?: string | null;
    /**
     * Name
     * @minLength 1
     */
    name: string;
    /**
     * Unique identification
     * @minLength 1
     */
    namespaceUri: string;
    /** List of codes of the replaced items */
    replacedObjectCodes?: string[] | null;
    /** List of codes of the replacing items */
    replacingObjectCodes?: string[] | null;
    /**
     * Date of the revision
     * @format date-time
     */
    revisionDateUtc?: string | null;
    /**
     * Revision number
     * @format int32
     */
    revisionNumber?: number | null;
    /**
     * Status, can be: Preview, Active or Inactive
     * @minLength 1
     */
    status: string;
    /** List of subdivisions (e.g. states) where used */
    subdivisionsOfUse?: string[] | null;
    /** Alternative unique global identification */
    uid?: string | null;
    /**
     * Date of the version
     * @format date-time
     */
    versionDateUtc: string;
    /**
     * Version number
     * @format int32
     */
    versionNumber?: number | null;
    /** URI of a visual representation */
    visualRepresentationUri?: string | null;
    /** List of synonyms for the material */
    synonyms?: string[] | null;
    parentMaterialReference?: MaterialReferenceContractV2;
    /** List of the properties of this material */
    materialProperties?: MaterialPropertyContractV2[] | null;
    /** List of relations to classifications, can be reference to materials of other domains */
    classificationRelations?: MaterialRelationContractV2[] | null;
    /** List of child materials (only filled if requested) */
    childMaterialReferences?: MaterialReferenceContractV2[] | null;
}
export interface MaterialPropertyContractV1 {
    /**
     * Name of the property
     * @minLength 1
     */
    name: string;
    /**
     * Plain language description of the property.
     * If at Property level no description has been given but a "Definition" is available, then "Definition" is returned as description
     */
    description?: string | null;
    /** Format for expressing the value of the property */
    dataType?: string | null;
    /**
     * Dimension of the physical quantity in format "L M T I Θ N J", for example "-2 1 0 0 0 0 0".
     * With
     *   L   Length
     *   M   Mass
     *   T   Time
     *   I   Electric current
     *   Θ   Thermodynamic Temperature
     *   N   Amount of substance
     *   J   Luminous intensity
     */
    dimension?: string | null;
    /**
     * The Length value of the dimension
     * @format int32
     */
    dimensionLength?: number | null;
    /**
     * The Mass value of the dimension
     * @format int32
     */
    dimensionMass?: number | null;
    /**
     * The Time value of the dimension
     * @format int32
     */
    dimensionTime?: number | null;
    /**
     * The Electric current value of the dimension
     * @format int32
     */
    dimensionElectricCurrent?: number | null;
    /**
     * The Thermodynamic temperature value of the dimension
     * @format int32
     */
    dimensionThermodynamicTemperature?: number | null;
    /**
     * The Amount of substance value of the dimension
     * @format int32
     */
    dimensionAmountOfSubstance?: number | null;
    /**
     * The Luminous intensity value of the dimension
     * @format int32
     */
    dimensionLuminousIntensity?: number | null;
    /**
     * List of codes of the properties which are parameters of the function for a dynamic property.
     * Only applicable for dynamic properties (IsDynamic)
     */
    dynamicParameterPropertyCodes?: string[] | null;
    /** Illustrate possible use or values of the Property */
    example?: string | null;
    /** True if the value of this property is dependent on other properties (as provided in DynamicParameterPropertyCodes) */
    isDynamic?: boolean | null;
    /** Indicates if this property is required for the material */
    isRequired?: boolean | null;
    /** Indicates if the value of the property can be changed by the user */
    isWritable?: boolean | null;
    /**
     * Maximum value of the property, exclusive
     * This value does not need to be the same as the MaxExclusive in the Property contract
     * because this value can be overruled at Material-Property level to define a more strict value.
     * @format double
     */
    maxExclusive?: number | null;
    /**
     * Maximum value of the property, inclusive
     * This value does not need to be the same as the MaxInclusive in the Property contract
     * because this value can be overruled at Material-Property level to define a more strict value.
     * @format double
     */
    maxInclusive?: number | null;
    /**
     * Minimum value of the property, exclusive
     * This value does not need to be the same as the MinExclusive in the Property contract
     * because this value can be overruled at Material-Property level to define a more strict value.
     * @format double
     */
    minExclusive?: number | null;
    /**
     * Minimum value of the property, inclusive
     * This value does not need to be the same as the MinInclusive in the Property contract
     * because this value can be overruled at Material-Property level to define a more strict value.
     * @format double
     */
    minInclusive?: number | null;
    /**
     * An XML Schema Regular expression for the property value.
     * See for explanation: https://www.regular-expressions.info/xml.html.
     * This value does not need to be the same as the Pattern in the Property contract
     * because this value can be overruled at Material-Property level to define a more strict value.
     */
    pattern?: string | null;
    /** The quantity in plain text */
    physicalQuantity?: string | null;
    /**
     * List of possible values
     * This list does not need to be the same as the list of PossibleValues in the Property contract
     * because this list can be overruled at Material-Property level to define a more strict list.
     */
    possibleValues?: MaterialPropertyValueContractV1[] | null;
    /** Predefined value: if the material can have only one value for this property, this is it */
    predefinedValue?: string | null;
    /** Code of the property, only applicable if property is of the same domain as the material. */
    propertyCode?: string | null;
    /** Name of the Domain this property belongs to */
    propertyDomainName?: string | null;
    /** Unique identification of the property */
    propertyNamespaceUri?: string | null;
    /** Name of the Property Set */
    propertySet?: string | null;
    /** Status of the property: Preview, Active or Inactive */
    propertyStatus?: string | null;
    /** Indicates kind of value: Single, Range (2 values expected), List (multiple values expected), Complex (use in combination with "ConnectedProperties"), ComplexList */
    propertyValueKind?: string | null;
    /** Symbol of the property */
    symbol?: string | null;
    /** List of units to select from */
    units?: string[] | null;
}
export interface MaterialPropertyContractV2 {
    /**
     * Name of the property
     * @minLength 1
     */
    name: string;
    /**
     * Plain language description of the property.
     * If at Property level no description has been given but a "Definition" is available, then "Definition" is returned as description
     */
    description?: string | null;
    /** Format for expressing the value of the property */
    dataType?: string | null;
    /**
     * Dimension of the physical quantity in format "L M T I Θ N J", for example "-2 1 0 0 0 0 0".
     * With
     *   L   Length
     *   M   Mass
     *   T   Time
     *   I   Electric current
     *   Θ   Thermodynamic Temperature
     *   N   Amount of substance
     *   J   Luminous intensity
     */
    dimension?: string | null;
    /**
     * The Length value of the dimension
     * @format int32
     */
    dimensionLength?: number | null;
    /**
     * The Mass value of the dimension
     * @format int32
     */
    dimensionMass?: number | null;
    /**
     * The Time value of the dimension
     * @format int32
     */
    dimensionTime?: number | null;
    /**
     * The Electric current value of the dimension
     * @format int32
     */
    dimensionElectricCurrent?: number | null;
    /**
     * The Thermodynamic temperature value of the dimension
     * @format int32
     */
    dimensionThermodynamicTemperature?: number | null;
    /**
     * The Amount of substance value of the dimension
     * @format int32
     */
    dimensionAmountOfSubstance?: number | null;
    /**
     * The Luminous intensity value of the dimension
     * @format int32
     */
    dimensionLuminousIntensity?: number | null;
    /**
     * List of codes of the properties which are parameters of the function for a dynamic property.
     * Only applicable for dynamic properties (IsDynamic)
     */
    dynamicParameterPropertyCodes?: string[] | null;
    /** Illustrate possible use or values of the Property */
    example?: string | null;
    /** True if the value of this property is dependent on other properties (as provided in DynamicParameterPropertyCodes) */
    isDynamic?: boolean | null;
    /** Indicates if this property is required for the material */
    isRequired?: boolean | null;
    /** Indicates if the value of the property can be changed by the user */
    isWritable?: boolean | null;
    /**
     * Maximum value of the property, exclusive
     * This value does not need to be the same as the MaxExclusive in the Property contract
     * because this value can be overruled at Material-Property level to define a more strict value.
     * @format double
     */
    maxExclusive?: number | null;
    /**
     * Maximum value of the property, inclusive
     * This value does not need to be the same as the MaxInclusive in the Property contract
     * because this value can be overruled at Material-Property level to define a more strict value.
     * @format double
     */
    maxInclusive?: number | null;
    /**
     * Minimum value of the property, exclusive
     * This value does not need to be the same as the MinExclusive in the Property contract
     * because this value can be overruled at Material-Property level to define a more strict value.
     * @format double
     */
    minExclusive?: number | null;
    /**
     * Minimum value of the property, inclusive
     * This value does not need to be the same as the MinInclusive in the Property contract
     * because this value can be overruled at Material-Property level to define a more strict value.
     * @format double
     */
    minInclusive?: number | null;
    /**
     * An XML Schema Regular expression for the property value.
     * See for explanation: https://www.regular-expressions.info/xml.html.
     * This value does not need to be the same as the Pattern in the Property contract
     * because this value can be overruled at Material-Property level to define a more strict value.
     */
    pattern?: string | null;
    /** The quantity in plain text */
    physicalQuantity?: string | null;
    /**
     * List of allowed values
     * This list does not need to be the same as the list of AllowedValues in the Property contract
     * because this list can be overruled at Material-Property level to define a more strict list.
     */
    allowedValues?: MaterialPropertyValueContractV2[] | null;
    /** Predefined value: if the material can have only one value for this property, this is it */
    predefinedValue?: string | null;
    /** Code of the property, only applicable if property is of the same domain as the material. */
    propertyCode?: string | null;
    /** Name of the Domain this property belongs to */
    propertyDomainName?: string | null;
    /** Unique identification of the property */
    propertyNamespaceUri?: string | null;
    /** Name of the Property Set */
    propertySet?: string | null;
    /** Status of the property: Preview, Active or Inactive */
    propertyStatus?: string | null;
    /** Indicates kind of value: Single, Range (2 values expected), List (multiple values expected), Complex (use in combination with "ConnectedProperties"), ComplexList */
    propertyValueKind?: string | null;
    /** Symbol of the property */
    symbol?: string | null;
    /** List of units to select from */
    units?: string[] | null;
    /** List of QUDT unit codes to select from */
    qudtCodes?: string[] | null;
}
export interface MaterialPropertyValueContractV1 {
    /** Globally unique identification of the value (if present) */
    namespaceUri?: string | null;
    /** Identification of the value */
    code?: string | null;
    /**
     * Possible value of the property
     * @minLength 1
     */
    value: string;
    /** Description of the value */
    description?: string | null;
    /**
     * Sort number of value within the list of values for the Property
     * @format int32
     */
    sortNumber?: number | null;
}
export interface MaterialPropertyValueContractV2 {
    /** Globally unique identification of the value (if present) */
    namespaceUri?: string | null;
    /** Identification of the value */
    code?: string | null;
    /**
     * Allowed value of the property
     * @minLength 1
     */
    value: string;
    /** Description of the value */
    description?: string | null;
    /**
     * Sort number of value within the list of values for the Property
     * @format int32
     */
    sortNumber?: number | null;
}
export interface MaterialReferenceContractV1 {
    /** @minLength 1 */
    namespaceUri: string;
    name?: string | null;
    code?: string | null;
}
export interface MaterialReferenceContractV2 {
    /** @minLength 1 */
    namespaceUri: string;
    name?: string | null;
    code?: string | null;
}
export interface MaterialRelationContractV1 {
    /**
     * Can be one of: HasReference, IsEqualTo, IsSynonymOf, IsParentOf, IsChildOf, HasPart
     * @minLength 1
     */
    relationType: string;
    /**
     * Namespace URI of the related classification
     * @minLength 1
     */
    relatedClassificationUri: string;
    /** Name of the related classification */
    relatedClassificationName?: string | null;
}
export interface MaterialRelationContractV2 {
    /**
     * Can be one of: HasReference, IsEqualTo, IsSynonymOf, IsParentOf, IsChildOf, HasPart
     * @minLength 1
     */
    relationType: string;
    /**
     * Namespace URI of the related classification
     * @minLength 1
     */
    relatedClassificationUri: string;
    /** Name of the related classification */
    relatedClassificationName?: string | null;
}
export interface MaterialSearchResultContractV1 {
    name?: string | null;
    namespaceUri?: string | null;
    definition?: string | null;
    synonyms?: string[] | null;
    relatedClassifications?: MaterialClassificationRelationContractV1[] | null;
}
export interface ProblemDetails {
    type?: string | null;
    title?: string | null;
    /** @format int32 */
    status?: number | null;
    detail?: string | null;
    instance?: string | null;
    [key: string]: any;
}
export interface PropertyClassContractV4 {
    /** Globally unique identification of the class */
    uri?: string | null;
    /** Code of the class */
    code?: string | null;
    /**
     * Name of the class
     * @minLength 1
     */
    name: string;
    /** Definition of the class */
    definition?: string | null;
    /** Description of the class */
    description?: string | null;
    propertySet?: string | null;
}
export interface PropertyContractV2 {
    /** Namespace URI of the domain */
    domainNamespaceUri?: string | null;
    /**
     * Date of activation
     * @format date-time
     */
    activationDateUtc: string;
    /**
     * Code used originally by the domain
     * @minLength 1
     */
    code: string;
    /** Language code of the creator */
    creatorLanguageCode?: string | null;
    /** List of countries where used */
    countriesOfUse?: string[] | null;
    /** Country of origin */
    countryOfOrigin?: string | null;
    /**
     * Date of deactivation
     * @format date-time
     */
    deActivationDateUtc?: string | null;
    /** Definition */
    definition?: string | null;
    /** Explanation of the deprecation */
    deprecationExplanation?: string | null;
    /** Reference to a(n official) document */
    documentReference?: string | null;
    /**
     * Name
     * @minLength 1
     */
    name: string;
    /**
     * Unique identification
     * @minLength 1
     */
    namespaceUri: string;
    /** List of codes of the replaced items */
    replacedObjectCodes?: string[] | null;
    /** List of codes of the replacing items */
    replacingObjectCodes?: string[] | null;
    /**
     * Date of the revision
     * @format date-time
     */
    revisionDateUtc?: string | null;
    /**
     * Revision number
     * @format int32
     */
    revisionNumber?: number | null;
    /**
     * Status, can be: Preview, Active or Inactive
     * @minLength 1
     */
    status: string;
    /** List of subdivisions (e.g. states) where used */
    subdivisionsOfUse?: string[] | null;
    /** Alternative unique global identification */
    uid?: string | null;
    /**
     * Date of the version
     * @format date-time
     */
    versionDateUtc: string;
    /**
     * Version number
     * @format int32
     */
    versionNumber?: number | null;
    /** URI of a visual representation */
    visualRepresentationUri?: string | null;
    /** Plain language description of the property. */
    description?: string | null;
    /** List of connected property codes */
    connectedPropertyCodes?: string[] | null;
    /** Format for expressing the value of the property: Boolean, Character, Date, Enumeration, Integer, Real, String, Time */
    dataType?: string | null;
    /**
     * Dimension of the physical quantity in format "L M T I Θ N J", for example "-2 1 0 0 0 0 0".
     * With
     *   L   Length
     *   M   Mass
     *   T   Time
     *   I   Electric current
     *   Θ   Thermodynamic Temperature
     *   N   Amount of substance
     *   J   Luminous intensity
     */
    dimension?: string | null;
    /**
     * The Length value of the dimension
     * @format int32
     */
    dimensionLength?: number | null;
    /**
     * The Mass value of the dimension
     * @format int32
     */
    dimensionMass?: number | null;
    /**
     * The Time value of the dimension
     * @format int32
     */
    dimensionTime?: number | null;
    /**
     * The Electric current value of the dimension
     * @format int32
     */
    dimensionElectricCurrent?: number | null;
    /**
     * The Thermodynamic temperature value of the dimension
     * @format int32
     */
    dimensionThermodynamicTemperature?: number | null;
    /**
     * The Amount of substance value of the dimension
     * @format int32
     */
    dimensionAmountOfSubstance?: number | null;
    /**
     * The Luminous intensity value of the dimension
     * @format int32
     */
    dimensionLuminousIntensity?: number | null;
    /**
     * List of codes of the properties which are parameters of the function for a dynamic property.
     * Only applicable for dynamic properties (IsDynamic)
     */
    dynamicParameterPropertyCodes?: string[] | null;
    /** Illustrate possible use or values of the Property */
    example?: string | null;
    /** True if the value of this property is dependent on other properties (as provided in DynamicParameterPropertyCodes) */
    isDynamic?: boolean | null;
    /**
     * Maximum value of the property, exclusive
     * @format double
     */
    maxExclusive?: number | null;
    /**
     * Maximum value of the property, inclusive
     * @format double
     */
    maxInclusive?: number | null;
    /** Description of the method of measurement */
    methodOfMeasurement?: string | null;
    /**
     * Minimum value of the property, exclusive
     * @format double
     */
    minExclusive?: number | null;
    /**
     * Minimum value of the property, inclusive
     * @format double
     */
    minInclusive?: number | null;
    /**
     * An XML Schema Regular expression for the property value.
     * See for explanation: https://www.regular-expressions.info/xml.html.
     */
    pattern?: string | null;
    /** The quantity in plain text */
    physicalQuantity?: string | null;
    /** List of possible values */
    possibleValues?: PropertyValueContractV2[] | null;
    /** Indicates kind of value: Single, Range (2 values expected), List (multiple values expected), Complex (use in combination with "ConnectedProperties"), ComplexList */
    propertyValueKind?: string | null;
    /** List of relations with other properties */
    propertyRelations?: PropertyRelationContractV2[] | null;
    /** The text type, e.g. UTF-8 */
    textFormat?: string | null;
    /** Multiple references to Unit */
    units?: string[] | null;
    /** List of QUDT unit codes (if QUDT code available) */
    qudtCodes?: string[] | null;
}
export interface PropertyContractV3 {
    /** Namespace URI of the domain */
    domainNamespaceUri?: string | null;
    /**
     * Date of activation
     * @format date-time
     */
    activationDateUtc: string;
    /**
     * Code used originally by the domain
     * @minLength 1
     */
    code: string;
    /** Language code of the creator */
    creatorLanguageCode?: string | null;
    /** List of countries where used */
    countriesOfUse?: string[] | null;
    /** Country of origin */
    countryOfOrigin?: string | null;
    /**
     * Date of deactivation
     * @format date-time
     */
    deActivationDateUtc?: string | null;
    /** Definition */
    definition?: string | null;
    /** Explanation of the deprecation */
    deprecationExplanation?: string | null;
    /** Reference to a(n official) document */
    documentReference?: string | null;
    /**
     * Name
     * @minLength 1
     */
    name: string;
    /**
     * Unique identification
     * @minLength 1
     */
    namespaceUri: string;
    /** List of codes of the replaced items */
    replacedObjectCodes?: string[] | null;
    /** List of codes of the replacing items */
    replacingObjectCodes?: string[] | null;
    /**
     * Date of the revision
     * @format date-time
     */
    revisionDateUtc?: string | null;
    /**
     * Revision number
     * @format int32
     */
    revisionNumber?: number | null;
    /**
     * Status, can be: Preview, Active or Inactive
     * @minLength 1
     */
    status: string;
    /** List of subdivisions (e.g. states) where used */
    subdivisionsOfUse?: string[] | null;
    /** Alternative unique global identification */
    uid?: string | null;
    /**
     * Date of the version
     * @format date-time
     */
    versionDateUtc: string;
    /**
     * Version number
     * @format int32
     */
    versionNumber?: number | null;
    /** URI of a visual representation */
    visualRepresentationUri?: string | null;
    /** Plain language description of the property. */
    description?: string | null;
    /** List of connected property codes */
    connectedPropertyCodes?: string[] | null;
    /** Format for expressing the value of the property: Boolean, Character, Date, Enumeration, Integer, Real, String, Time */
    dataType?: string | null;
    /**
     * Dimension of the physical quantity in format "L M T I Θ N J", for example "-2 1 0 0 0 0 0".
     * With
     *   L   Length
     *   M   Mass
     *   T   Time
     *   I   Electric current
     *   Θ   Thermodynamic Temperature
     *   N   Amount of substance
     *   J   Luminous intensity
     */
    dimension?: string | null;
    /**
     * The Length value of the dimension
     * @format int32
     */
    dimensionLength?: number | null;
    /**
     * The Mass value of the dimension
     * @format int32
     */
    dimensionMass?: number | null;
    /**
     * The Time value of the dimension
     * @format int32
     */
    dimensionTime?: number | null;
    /**
     * The Electric current value of the dimension
     * @format int32
     */
    dimensionElectricCurrent?: number | null;
    /**
     * The Thermodynamic temperature value of the dimension
     * @format int32
     */
    dimensionThermodynamicTemperature?: number | null;
    /**
     * The Amount of substance value of the dimension
     * @format int32
     */
    dimensionAmountOfSubstance?: number | null;
    /**
     * The Luminous intensity value of the dimension
     * @format int32
     */
    dimensionLuminousIntensity?: number | null;
    /**
     * List of codes of the properties which are parameters of the function for a dynamic property.
     * Only applicable for dynamic properties (IsDynamic)
     */
    dynamicParameterPropertyCodes?: string[] | null;
    /** Illustrate possible use or values of the Property */
    example?: string | null;
    /** True if the value of this property is dependent on other properties (as provided in DynamicParameterPropertyCodes) */
    isDynamic?: boolean | null;
    /**
     * Maximum value of the property, exclusive
     * @format double
     */
    maxExclusive?: number | null;
    /**
     * Maximum value of the property, inclusive
     * @format double
     */
    maxInclusive?: number | null;
    /** Description of the method of measurement */
    methodOfMeasurement?: string | null;
    /**
     * Minimum value of the property, exclusive
     * @format double
     */
    minExclusive?: number | null;
    /**
     * Minimum value of the property, inclusive
     * @format double
     */
    minInclusive?: number | null;
    /**
     * An XML Schema Regular expression for the property value.
     * See for explanation: https://www.regular-expressions.info/xml.html.
     */
    pattern?: string | null;
    /** The quantity in plain text */
    physicalQuantity?: string | null;
    /** List of allowed values */
    allowedValues?: PropertyValueContractV3[] | null;
    /** Indicates kind of value: Single, Range (2 values expected), List (multiple values expected), Complex (use in combination with "ConnectedProperties"), ComplexList */
    propertyValueKind?: string | null;
    /** List of relations with other properties */
    propertyRelations?: PropertyRelationContractV3[] | null;
    /** The text type, e.g. UTF-8 */
    textFormat?: string | null;
    /** Multiple references to Unit */
    units?: string[] | null;
    /** List of QUDT unit codes (if QUDT code available) */
    qudtCodes?: string[] | null;
}
export interface PropertyContractV4 {
    /** URI of the dictionary */
    dictionaryUri?: string | null;
    /**
     * Date of activation
     * @format date-time
     */
    activationDateUtc: string;
    /**
     * Code used originally by the dictionary
     * @minLength 1
     */
    code: string;
    /** Language code of the creator */
    creatorLanguageCode?: string | null;
    /** List of countries where used */
    countriesOfUse?: string[] | null;
    /** Country of origin */
    countryOfOrigin?: string | null;
    /**
     * Date of deactivation
     * @format date-time
     */
    deActivationDateUtc?: string | null;
    /** Formal definition */
    definition?: string | null;
    /** Explanation of the deprecation */
    deprecationExplanation?: string | null;
    /** Description */
    description?: string | null;
    /** Reference to a(n official) document */
    documentReference?: string | null;
    /**
     * Name
     * @minLength 1
     */
    name: string;
    /**
     * Unique identification
     * @minLength 1
     */
    uri: string;
    /** List of codes of the replaced items */
    replacedObjectCodes?: string[] | null;
    /** List of codes of the replacing items */
    replacingObjectCodes?: string[] | null;
    /**
     * Date of the revision
     * @format date-time
     */
    revisionDateUtc?: string | null;
    /**
     * Revision number
     * @format int32
     */
    revisionNumber?: number | null;
    /**
     * Status, can be: Preview, Active or Inactive
     * @minLength 1
     */
    status: string;
    /** List of subdivisions (e.g. states) where used */
    subdivisionsOfUse?: string[] | null;
    /** Alternative unique global identification */
    uid?: string | null;
    /**
     * Date of the version
     * @format date-time
     */
    versionDateUtc: string;
    /**
     * Version number
     * @format int32
     */
    versionNumber?: number | null;
    /** URI of a visual representation */
    visualRepresentationUri?: string | null;
    /** List of connected property codes */
    connectedPropertyCodes?: string[] | null;
    /** Format for expressing the value of the property: Boolean, Character, Date, Enumeration, Integer, Real, String, Time */
    dataType?: string | null;
    /**
     * Dimension of the physical quantity in format "L M T I Θ N J", for example "-2 1 0 0 0 0 0".
     * With
     *   L   Length
     *   M   Mass
     *   T   Time
     *   I   Electric current
     *   Θ   Thermodynamic Temperature
     *   N   Amount of substance
     *   J   Luminous intensity
     */
    dimension?: string | null;
    /**
     * The Length value of the dimension
     * @format int32
     */
    dimensionLength?: number | null;
    /**
     * The Mass value of the dimension
     * @format int32
     */
    dimensionMass?: number | null;
    /**
     * The Time value of the dimension
     * @format int32
     */
    dimensionTime?: number | null;
    /**
     * The Electric current value of the dimension
     * @format int32
     */
    dimensionElectricCurrent?: number | null;
    /**
     * The Thermodynamic temperature value of the dimension
     * @format int32
     */
    dimensionThermodynamicTemperature?: number | null;
    /**
     * The Amount of substance value of the dimension
     * @format int32
     */
    dimensionAmountOfSubstance?: number | null;
    /**
     * The Luminous intensity value of the dimension
     * @format int32
     */
    dimensionLuminousIntensity?: number | null;
    /**
     * List of codes of the properties which are parameters of the function for a dynamic property.
     * Only applicable for dynamic properties (IsDynamic)
     */
    dynamicParameterPropertyCodes?: string[] | null;
    /** Illustrate possible use or values of the Property */
    example?: string | null;
    /** True if the value of this property is dependent on other properties (as provided in DynamicParameterPropertyCodes) */
    isDynamic?: boolean | null;
    /**
     * Maximum value of the property, exclusive
     * @format double
     */
    maxExclusive?: number | null;
    /**
     * Maximum value of the property, inclusive
     * @format double
     */
    maxInclusive?: number | null;
    /** Description of the method of measurement */
    methodOfMeasurement?: string | null;
    /**
     * Minimum value of the property, exclusive
     * @format double
     */
    minExclusive?: number | null;
    /**
     * Minimum value of the property, inclusive
     * @format double
     */
    minInclusive?: number | null;
    /**
     * An XML Schema Regular expression for the property value.
     * See for explanation: https://www.regular-expressions.info/xml.html.
     */
    pattern?: string | null;
    /** The quantity in plain text */
    physicalQuantity?: string | null;
    /** List of allowed values */
    allowedValues?: PropertyValueContractV4[] | null;
    /** Indicates kind of value: Single, Range (2 values expected), List (multiple values expected), Complex (use in combination with "ConnectedProperties"), ComplexList */
    propertyValueKind?: string | null;
    /** List of relations with other properties */
    propertyRelations?: PropertyRelationContractV4[] | null;
    /** The text type, e.g. UTF-8 */
    textFormat?: string | null;
    /** Multiple references to Unit */
    units?: string[] | null;
    /** List of QUDT unit codes (if QUDT code available) */
    qudtCodes?: string[] | null;
    /** List of the classes this property is used in (only classes of same dictionary as the property are listed) */
    propertyClasses?: PropertyClassContractV4[] | null;
}
export interface PropertyListItemContractV1 {
    uri?: string | null;
    code?: string | null;
    name?: string | null;
}
export interface PropertyRelationContractV2 {
    /** The relation with the other property: e.g. HasReference, IsEqualTo */
    relationType?: string | null;
    /** Namespace URI of the related property */
    relatedPropertyUri?: string | null;
    /** Name of the related property */
    relatedPropertyName?: string | null;
}
export interface PropertyRelationContractV3 {
    /** Globally unique identification of the value */
    namespaceUri?: string | null;
    /** The relation with the other property: e.g. HasReference, IsEqualTo */
    relationType?: string | null;
    /** Namespace URI of the related property */
    relatedPropertyUri?: string | null;
    /** Name of the related property */
    relatedPropertyName?: string | null;
}
export interface PropertyRelationContractV4 {
    /** Globally unique identification of the relation */
    uri?: string | null;
    /** The relation with the other property: e.g. HasReference, IsEqualTo */
    relationType?: string | null;
    /** Namespace URI of the related property */
    relatedPropertyUri?: string | null;
    /** Name of the related property */
    relatedPropertyName?: string | null;
}
export interface PropertyValueContractV1 {
    /** Globally unique identification of the value (if present) */
    namespaceUri?: string | null;
    /** Identification of the value (unique within the property) */
    code?: string | null;
    /**
     * Allowed value of the property
     * @minLength 1
     */
    value: string;
    /** Description of the value */
    description?: string | null;
    /**
     * (Optional) Sort number of value within the list of values for the Property
     * @format int32
     */
    sortNumber?: number | null;
}
export interface PropertyValueContractV2 {
    /** Globally unique identification of the value (if present) */
    namespaceUri?: string | null;
    /** Identification of the value (unique within the property) */
    code?: string | null;
    /**
     * Possible value of the property
     * @minLength 1
     */
    value: string;
    /** Description of the value */
    description?: string | null;
    /**
     * (Optional) Sort number of value within the list of values for the Property
     * @format int32
     */
    sortNumber?: number | null;
}
export interface PropertyValueContractV3 {
    /** Globally unique identification of the value */
    namespaceUri?: string | null;
    /** Identification of the value (unique within the property) */
    code?: string | null;
    /**
     * Allowed value of the property
     * @minLength 1
     */
    value: string;
    /** Description of the value */
    description?: string | null;
    /**
     * (Optional) Sort number of value within the list of values for the Property
     * @format int32
     */
    sortNumber?: number | null;
}
export interface PropertyValueContractV4 {
    /** Globally unique identification of the value */
    uri?: string | null;
    /** Identification of the value (unique within the property) */
    code?: string | null;
    /**
     * Allowed value of the property
     * @minLength 1
     */
    value: string;
    /** Description of the value */
    description?: string | null;
    /**
     * (Optional) Sort number of value within the list of values for the Property
     * @format int32
     */
    sortNumber?: number | null;
}
export interface ReferenceDocumentContractV1 {
    title?: string | null;
    name?: string | null;
    /** @format date-time */
    date?: string;
}
export interface SearchInDictionaryResponseContractV1 {
    /** @format int32 */
    totalCount?: number;
    /** @format int32 */
    offset?: number;
    /** @format int32 */
    count?: number;
    dictionary?: DictionarySearchResultContractV1;
}
export interface SearchResultContractV1 {
    /**
     * The total number of Materials matching the search criteria
     * @format int32
     */
    numberOfMaterialsFound?: number;
    /** The list of Domains with found Materials and Material Properties */
    domains?: DomainSearchResultContractV1[] | null;
}
export interface SearchResultContractV2 {
    /**
     * The total number of Classifications matching the search criteria
     * @format int32
     */
    numberOfClassificationsFound?: number;
    /** The list of Domains with found Classification and ClassificationProperties */
    domains?: DomainSearchResultContractV2[] | null;
}
export interface TextSearchResponseClassContractV1 {
    /** Unique identification of the dictionary the class belongs to */
    dictionaryUri?: string | null;
    /** Name of the dictionary the class belongs to */
    dictionaryName?: string | null;
    name?: string | null;
    /** Code that can be used for dictionary specific purposes */
    referenceCode?: string | null;
    /** Unique identification of the class */
    uri?: string | null;
    /** Type of the class */
    classType?: string | null;
    description?: string | null;
    parentClassName?: string | null;
    relatedIfcEntityNames?: string[] | null;
}
export interface TextSearchResponseClassificationContractV5 {
    /** Unique identification of the domain the classification belongs to */
    domainNamespaceUri?: string | null;
    /** Name of the domain the classification belongs to */
    domainName?: string | null;
    name?: string | null;
    /** Code that can be used for domain specific purposes */
    referenceCode?: string | null;
    /** Unique identification of the classification */
    namespaceUri?: string | null;
    /** Type of the classification. */
    classificationType?: string | null;
    description?: string | null;
    parentClassificationName?: string | null;
    relatedIfcEntityNames?: string[] | null;
}
export interface TextSearchResponseClassificationContractV6 {
    /** Unique identification of the domain the classification belongs to */
    domainNamespaceUri?: string | null;
    /** Name of the domain the classification belongs to */
    domainName?: string | null;
    name?: string | null;
    /** Code that can be used for domain specific purposes */
    referenceCode?: string | null;
    /** Unique identification of the classification */
    namespaceUri?: string | null;
    /** Type of the classification. */
    classificationType?: string | null;
    description?: string | null;
    parentClassificationName?: string | null;
    relatedIfcEntityNames?: string[] | null;
}
export interface TextSearchResponseContractV1 {
    /** @format int32 */
    totalCount?: number;
    /** @format int32 */
    offset?: number;
    /** @format int32 */
    count?: number;
    /** The list of Classes found */
    classes?: TextSearchResponseClassContractV1[] | null;
    /** The list of Dictionaries with found results */
    dictionaries?: TextSearchResponseDictionaryContractV1[] | null;
    /** List of Properties found */
    properties?: TextSearchResponsePropertyContractV1[] | null;
}
export interface TextSearchResponseContractV5 {
    /** The list of Classifications found */
    classifications?: TextSearchResponseClassificationContractV5[] | null;
    domains?: TextSearchResponseDomainContractV5[] | null;
    properties?: TextSearchResponsePropertyContractV5[] | null;
}
export interface TextSearchResponseContractV6 {
    /** The list of Classifications found */
    classifications?: TextSearchResponseClassificationContractV6[] | null;
    /** The list of Domains with found results */
    domains?: TextSearchResponseDomainContractV6[] | null;
    /** The list of Materials found */
    materials?: TextSearchResponseMaterialContractV6[] | null;
    /** List of Properties found */
    properties?: TextSearchResponsePropertyContractV6[] | null;
}
export interface TextSearchResponseDictionaryContractV1 {
    uri?: string | null;
    name?: string | null;
}
export interface TextSearchResponseDomainContractV5 {
    namespaceUri?: string | null;
    name?: string | null;
}
export interface TextSearchResponseDomainContractV6 {
    namespaceUri?: string | null;
    name?: string | null;
}
export interface TextSearchResponseMaterialContractV6 {
    /** Unique identification of the domain the material belongs to */
    domainNamespaceUri?: string | null;
    /** Name of the domain the material belongs to */
    domainName?: string | null;
    name?: string | null;
    /** Code that can be used for domain specific purposes */
    referenceCode?: string | null;
    /** Unique identification of the material */
    namespaceUri?: string | null;
    description?: string | null;
    parentMaterialName?: string | null;
}
export interface TextSearchResponsePropertyContractV1 {
    dictionaryUri?: string | null;
    dictionaryName?: string | null;
    uri?: string | null;
    name?: string | null;
    description?: string | null;
}
export interface TextSearchResponsePropertyContractV5 {
    domainNamespaceUri?: string | null;
    domainName?: string | null;
    namespaceUri?: string | null;
    name?: string | null;
    description?: string | null;
}
export interface TextSearchResponsePropertyContractV6 {
    domainNamespaceUri?: string | null;
    domainName?: string | null;
    namespaceUri?: string | null;
    name?: string | null;
    description?: string | null;
}
export interface UnitContractV1 {
    code?: string | null;
    name?: string | null;
    symbol?: string | null;
    qudtUri?: string | null;
}
export interface UploadImportFileResultV1 {
    /**
     * Indicates if the file will be imported.
     * Warnings are allowed, import will continue but may lead to undesired values in the database.
     */
    isOk?: boolean;
    /**
     * The list of errors found.
     * It may happen that if you fix one error new errors will be discovered.
     */
    errors?: UploadImportFileResultItemV1[] | null;
    /**
     * List of warnings.
     * It is best to have no warnings at all to avoid inconsistent or incorrect values in the database
     */
    warnings?: UploadImportFileResultItemV1[] | null;
    /** Informational messages */
    informationalMessages?: UploadImportFileResultItemV1[] | null;
}
export interface UploadImportFileResultItemV1 {
    /** The attribute the message applies to */
    attribute?: string | null;
    /** The message */
    message?: string | null;
}
export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;
export interface FullRequestParams extends Omit<RequestInit, 'body'> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseFormat;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}
export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
    securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
    customFetch?: typeof fetch;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded",
    Text = "text/plain"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker?;
    private abortControllers;
    private customFetch;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType | null) => void;
    protected encodeQueryParam(key: string, value: any): string;
    protected addQueryParam(query: QueryParamsType, key: string): string;
    protected addArrayQueryParam(query: QueryParamsType, key: string): any;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams;
    protected createAbortSignal: (cancelToken: CancelToken) => AbortSignal | undefined;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title Dictionaries API
 * @version v1
 * @license MIT license (https://bsddprototype2020.blob.core.windows.net/public/Copyright_2020_buildingSMART_International.txt)
 * @baseUrl https://api.bsdd.buildingsmart.org/
 * @contact Support <bsdd_support@buildingsmart.org> (https://github.com/buildingSMART/bSDD)
 *
 * <p>API to access the buildingSMART Data Dictionary.</p><p>For manually uploading import files, please go to <a href="https://manage.bsdd.buildingsmart.org">bSDD Management portal</a>. Version history can be found at <a href="https://github.com/buildingSMART/bSDD/blob/master/API%20version%20history.md">Version history</a>.</p><p>Keep an eye on (planned) updates: <a href="https://forums.buildingsmart.org/t/bsdd-tech-updates/4889">bSDD tech updates</a></p><h3>For client developers</h3><p>If you're creating a desktop client that only calls the not secured APIs, you're ready to go.<br/>If you don't use the secured APIs but want to call the other APIs from your website or SPA, then we need the URL of your website to allow CORS.</p><p>If you are going to build a client that is going to use secured APIs, you must request a Client ID. You can do so by sending us an email and give:</p><ul><li>the name of the client application</li><li>type of application:<ul><li>Web application</li><li>Single-page application</li><li>iOS / macOS, Object-C, Swift, Xamarin</li><li>Adroid - Java, Kotlin, Xamarin</li><li>Mobile/desktop</li></ul> <li>which development language are you using? (sometimes the redirectUri to be configured depends on the used library)</li><li>if it is a website or SPA, specify the return url (the login page will redirect to this url after user has logged in)</li></ul>
 */
export declare class BsddApiBase<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    api: {
        /**
     * No description
     *
     * @tags Class
     * @name ClassV1List
     * @summary Get Class details - this API replaces api/Classification
    Changes:
    - now returns Material as well
    - "Classification" has been renamed to "Class"
    - "Domain" has been renamed to "Dictionary"
    - "NamespaceUri" has been renamed to "Uri"
     * @request GET:/api/Class/v1
     */
        classV1List: (query: {
            /** URI of the class, e.g. https://identifier.buildingsmart.org/uri/bs-agri/fruitvegs/1.1/class/apple */
            Uri: string;
            /** Use this option to include properties of the class. By default it is set to false */
            IncludeClassProperties?: boolean;
            /** Use this option to include references to child classes. By default it is set to false */
            IncludeChildClassReferences?: boolean;
            /** Use this option to include loading relations of the class. By default it is set to false */
            IncludeClassRelations?: boolean;
            /** Use this option to include loading reverse relations of the class, i.e. classes having a relation with this class. By default it is set to false */
            IncludeReverseRelations?: boolean;
            /** When including reverse relations, you can specify which dictionaries to include. By default all dictionaries are included */
            ReverseRelationDictionaryUris?: string[];
            /** Specify language (case sensitive). For those items the text is not available in the requested language, the text will be returned in the default language of the dictionary */
            languageCode?: string;
        }, params?: RequestParams) => Promise<HttpResponse<ClassContractV1, any>>;
        /**
     * No description
     *
     * @tags Dictionary
     * @name DictionaryV1List
     * @summary Get list of available Dictionaries. This one replaces /api/Domain. Changes:
    - "Domain" has been renamed to "Dictionary"
    - "NamespaceUri" has been renamed to "Uri"
     * @request GET:/api/Dictionary/v1
     */
        dictionaryV1List: (query?: {
            /**
             * Optional parameter to filter by first part of URI. Use this one to get details of just one dictionary version
             * or, if you leave out the version number at the end, get all the versions of a dictionary.
             * Example: https://identifier.buildingsmart.org/uri/bs-agri/fruitvegs/
             */
            Uri?: string;
            /**
             * Should test dictionaries be included in the result? By default it is set to false.
             * This option is ignored if you specify a URI.
             */
            IncludeTestDictionaries?: boolean;
            /**
             * Zero-based offset of the first item to be returned. Default is 0.
             * @format int32
             */
            Offset?: number;
            /**
             * Limit number of items to be returned. If you enter an offset then default limit is 100. The maximum number of items returned is 1000.
             * @format int32
             */
            Limit?: number;
        }, params?: RequestParams) => Promise<HttpResponse<DictionaryResponseContractV1, any>>;
        /**
     * No description
     *
     * @tags Dictionary
     * @name DictionaryV1ClassesList
     * @summary Get Dictionary with tree of classes.
    This one replaces /api/Domain. See https://github.com/buildingSMART/bSDD/blob/master/Documentation/API%20version%20history.md for changes.
     * @request GET:/api/Dictionary/v1/Classes
     */
        dictionaryV1ClassesList: (query: {
            /** The URI of the dictionary. The option "latest" is supported, e.g. https://identifier.buildingsmart.org/uri/bs-agri/fruitvegs/latest */
            Uri: string;
            /**
             * Set to true to get classes in a nested structure.
             * You can't use this option if you are using pagination.
             */
            UseNestedClasses?: boolean;
            /** Optional filter on class type. Possible values are "Class", "GroupOfProperties", "AlternativeUse" and "Material". */
            ClassType?: string;
            /**
             * Zero-based offset of the first item to be returned. Default is 0.
             * @format int32
             */
            Offset?: number;
            /**
             * Limit number of items to be returned. If you enter an offset then default limit is 100. The maximum number of items returned is 1000.
             * @format int32
             */
            Limit?: number;
            /** Specify language (case sensitive). For those items the text is not available in the requested language, the text will be returned in the default language of the dictionary */
            languageCode?: string;
        }, params?: RequestParams) => Promise<HttpResponse<DictionaryClassesResponseContractV1, any>>;
        /**
         * No description
         *
         * @tags Dictionary
         * @name DictionaryV1PropertiesList
         * @summary Get Dictionary with its properties
         * @request GET:/api/Dictionary/v1/Properties
         */
        dictionaryV1PropertiesList: (query: {
            /** The URI of the dictionary. The option "latest" is supported, e.g. https://identifier.buildingsmart.org/uri/bs-agri/fruitvegs/latest */
            Uri: string;
            /**
             * Zero-based offset of the first item to be returned. Default is 0.
             * @format int32
             */
            Offset?: number;
            /**
             * Limit number of items to be returned. If you enter an offset then default limit is 100. The maximum number of items returned is 1000.
             * @format int32
             */
            Limit?: number;
            /** Specify language (case sensitive). For those items the text is not available in the requested language, the text will be returned in the default language of the dictionary */
            languageCode?: string;
        }, params?: RequestParams) => Promise<HttpResponse<DictionaryPropertiesResponseContractV1, any>>;
        /**
     * No description
     *
     * @tags Dictionary
     * @name DictionaryDownloadSketchupV1Create
     * @summary Download a file with an export of a dictionary in format supported by Sketchup.
    This API replaces /api/RequestExportFile/preview
     * @request POST:/api/DictionaryDownload/sketchup/v1
     * @secure
     */
        dictionaryDownloadSketchupV1Create: (query: {
            /** The uri of the dictionary to be downloaded, including version number, e.g. https://identifier.buildingsmart.org/uri/bs-agri/fruitvegs/1.1. You can replace the version number by "latest" to automatically get the latest (active) version of the dictionary */
            DictionaryUri: string;
        }, params?: RequestParams) => Promise<HttpResponse<File, void | ProblemDetails>>;
        /**
         * No description
         *
         * @tags Dictionary Update
         * @name UploadImportFileV1Create
         * @summary Upload a bSDD import model json file, see https://github.com/buildingSMART/bSDD/tree/master/Model/Import%20Model for more information
         * @request POST:/api/UploadImportFile/v1
         * @secure
         */
        uploadImportFileV1Create: (data: {
            /**
             * Code of the organization owning the dictionary.
             * If you do not know the code, contact us (see e-mail address on top of this page)
             */
            OrganizationCode: string;
            /**
             * The bsdd import file in json format
             * @format binary
             */
            FormFile: File;
            /**
             * Set to true if you only want to validate the file. Even when there are no validation errors the file wil not be imported.
             * The validation result will not be send via e-mail.
             */
            ValidateOnly?: boolean;
            /**
             * Set to true if you are just testing your file. Data will be stored in the database, you can retrieve it via the API, but you can't set status to Active.
             * Dictionary will be deleted after 60 days of last upload.
             */
            IsTest?: boolean;
        }, params?: RequestParams) => Promise<HttpResponse<UploadImportFileResultV1, any>>;
        /**
         * No description
         *
         * @tags Dictionary Update
         * @name DictionaryV1Update
         * @summary Update the status of a Dictionary
         * @request PUT:/api/Dictionary/v1/{organizationCode}/{code}/{version}
         * @secure
         */
        dictionaryV1Update: (organizationCode: string, code: string, version: string, data: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @tags Dictionary Update
         * @name DictionaryV1Delete
         * @summary Delete a dictionary version
         * @request DELETE:/api/Dictionary/v1/{organizationCode}/{code}/{version}
         * @secure
         */
        dictionaryV1Delete: (organizationCode: string, code: string, version: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @tags Dictionary Update
         * @name DictionaryV1Delete2
         * @summary Delete all versions of a dictionary
         * @request DELETE:/api/Dictionary/v1/{organizationCode}/{code}
         * @originalName dictionaryV1Delete
         * @duplicate
         * @secure
         */
        dictionaryV1Delete2: (organizationCode: string, code: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @tags Property
         * @name PropertyV4List
         * @summary Get Property details
         * @request GET:/api/Property/v4
         */
        propertyV4List: (query: {
            /** URI of the property, e.g. https://identifier.buildingsmart.org/uri/bs-agri/fruitvegs/1.1/prop/color */
            uri: string;
            /** Set to true to get list of classes where property is used (only classes of the same dictionary as the property). Maximum number of class properties returned is 2000 */
            includeClasses?: boolean;
            /** Specify language (case sensitive). For those items the text is not available in the requested language, the text will be returned in the default language of the dictionary */
            languageCode?: string;
        }, params?: RequestParams) => Promise<HttpResponse<PropertyContractV4, any>>;
        /**
         * No description
         *
         * @tags Property
         * @name PropertyValueV2List
         * @summary Get Property Value details
         * @request GET:/api/PropertyValue/v2
         */
        propertyValueV2List: (query: {
            /** URI of the property value, e.g. https://identifier.buildingsmart.org/uri/bs-agri/fruitvegs/1.1/prop/color/value/red */
            uri: string;
            /** Language Code */
            languageCode?: string;
        }, params?: RequestParams) => Promise<HttpResponse<PropertyValueContractV4, any>>;
        /**
     * @description The details can be requested per Class via the Class API
     *
     * @tags Search
     * @name TextSearchV1List
     * @summary Search the bSDD database using free text, get list of Classes and/or Properties matching the text.
    Pagination options are for Classes and Properties combined. So if result consists of 10 classes and 5 properties, TotalCount will be 15. Classes will be listed first, so if you then use Offset=10 and Limit=5, you will get the 5 properties.
     * @request GET:/api/TextSearch/v1
     */
        textSearchV1List: (query: {
            /** The text to search for, minimum 2 characters (case and accent insensitive) */
            SearchText: string;
            /** Type filter: must be "All", "Classes" or "Properties" */
            TypeFilter?: string;
            /** List of dictionaries to filter on */
            DictionaryUris?: string[];
            /**
             * Zero-based offset of the first item to be returned. Default is 0.
             * @format int32
             */
            Offset?: number;
            /**
             * Limit number of items to be returned. If you enter an offset then default limit is 100. The maximum number of items returned is 1000.
             * @format int32
             */
            Limit?: number;
        }, params?: RequestParams) => Promise<HttpResponse<TextSearchResponseContractV1, any>>;
        /**
     * @description The details can be requested per Class via the Class API
     *
     * @tags Search
     * @name SearchInDictionaryV1List
     * @summary Search the bSDD database, get list of Classes without details.
    This version uses new naming and returns one Dictionary instead of a list with always one Dictionary.
    This API replaces /api/SearchList.
     * @request GET:/api/SearchInDictionary/v1
     */
        searchInDictionaryV1List: (query: {
            /** The uri of the Dictionary to filter on (required). The "latest" option is supported, e.g. https://identifier.buildingsmart.org/uri/bs-agri/fruitvegs/latest */
            DictionaryUri: string;
            /** The text to search for (case and accent insensitive) */
            SearchText?: string;
            /**
             * The ISO language code to search in and to return the text in (case sensitive)
             * If no language code specified or the text is not available in the requested language, the text will be returned in the default language of the dictionary.
             * If a language code has been given, the search takes place in texts of that language, otherwise searches will be done in the default language of the dictionary.
             * If an invalid or not supported language code is given, a Bad Request will be returned.
             */
            LanguageCode?: string;
            /** The official IFC entity name to filter on (case sensitive) */
            RelatedIfcEntity?: string;
            /**
             * Zero-based offset of the first item to be returned. Default is 0.
             * @format int32
             */
            Offset?: number;
            /**
             * Limit number of items to be returned. If you enter an offset then default limit is 100. The maximum number of items returned is 1000.
             * @format int32
             */
            Limit?: number;
        }, params?: RequestParams) => Promise<HttpResponse<SearchInDictionaryResponseContractV1, any>>;
        /**
     * No description
     *
     * @tags Search
     * @name ClassSearchV1List
     * @summary Search the bSDD database using free text, get list of Classes matching the text and optional additional filters.
    Changes with obsolete api/ClassificationSearch:
    - "Classification" has been renamed to "Class"
    - "Domain" has been renamed to "Dictionary"
    - "NamespaceUri" has been renamed to "Uri"
     * @request GET:/api/Class/Search/v1
     */
        classSearchV1List: (query: {
            /** The text to search for, minimum 3 characters (case and accent insensitive) */
            SearchText: string;
            /**
             * List of dictionaries to filter on.
             * For a class to be found it must be part of one of the given dictionaries
             */
            DictionaryUris?: string[];
            /**
             * List of related IFC entities to filter on.
             * For a class to be found it must have at least one of the given Related Ifc Entities
             */
            RelatedIfcEntities?: string[];
            /**
             * Zero-based offset of the first item to be returned. Default is 0.
             * @format int32
             */
            Offset?: number;
            /**
             * Limit number of items to be returned. If you enter an offset then default limit is 100. The maximum number of items returned is 1000.
             * @format int32
             */
            Limit?: number;
        }, params?: RequestParams) => Promise<HttpResponse<ClassSearchResponseContractV1, any>>;
        /**
         * No description
         *
         * @tags z Lookup data
         * @name UnitV1List
         * @summary Get list of all units
         * @request GET:/api/Unit/v1
         */
        unitV1List: (params?: RequestParams) => Promise<HttpResponse<UnitContractV1[], any>>;
        /**
         * No description
         *
         * @tags z Lookup data
         * @name ReferenceDocumentV1List
         * @summary Get list of all ReferenceDocuments
         * @request GET:/api/ReferenceDocument/v1
         */
        referenceDocumentV1List: (params?: RequestParams) => Promise<HttpResponse<ReferenceDocumentContractV1[], any>>;
        /**
         * No description
         *
         * @tags z Lookup data
         * @name LanguageV1List
         * @summary Get list of available Languages
         * @request GET:/api/Language/v1
         */
        languageV1List: (params?: RequestParams) => Promise<HttpResponse<LanguageContractV1[], any>>;
        /**
         * No description
         *
         * @tags z Lookup data
         * @name CountryV1List
         * @summary Get list of all Countries
         * @request GET:/api/Country/v1
         */
        countryV1List: (params?: RequestParams) => Promise<HttpResponse<CountryContractV1[], any>>;
        /**
         * @description The details can be requested per Classification via the Classification API
         *
         * @tags zz Obsolete APIs
         * @name TextSearchListOpenV6List
         * @summary Search the bSDD database using free text, get list of Classifications and/or Properties matching the text.
         * @request GET:/api/TextSearchListOpen/v6
         * @deprecated
         */
        textSearchListOpenV6List: (query: {
            /** The text to search for, minimum 3 characters (case and accent insensitive) */
            SearchText: string;
            /** Type filter: must be "All", "Classifications", "Materials" or "Properties" */
            TypeFilter?: string;
            /** List of domain to filter on */
            DomainNamespaceUris?: string[];
        }, params?: RequestParams) => Promise<HttpResponse<TextSearchResponseContractV6, any>>;
        /**
         * @description The details can be requested per Classification via the Classification API
         *
         * @tags zz Obsolete APIs
         * @name TextSearchListOpenV5List
         * @summary Search the bSDD database using free text, get list of Classifications and/or Properties matching the text.
         * @request GET:/api/TextSearchListOpen/v5
         * @deprecated
         */
        textSearchListOpenV5List: (query: {
            /** The text to search for, minimum 3 characters (case and accent insensitive) */
            SearchText: string;
            /** Type filter: must be "All", "Classifications" or "Properties" */
            TypeFilter?: string;
            /** List of domain to filter on */
            DomainNamespaceUris?: string[];
        }, params?: RequestParams) => Promise<HttpResponse<TextSearchResponseContractV5, any>>;
        /**
     * @description The details can be requested per Classification via the Classification API
     *
     * @tags zz Obsolete APIs
     * @name SearchListV2List
     * @summary Secured version of the "Search List API".
    Search the bSDD database, get list of Classifications without details.
     * @request GET:/api/SearchList/v2
     * @deprecated
     * @secure
     */
        searchListV2List: (query: {
            /** The namespace uri of the Domain to filter on (required) */
            DomainNamespaceUri: string;
            /** The text to search for (case and accent insensitive) */
            SearchText?: string;
            /**
             * The ISO language code to search in and to return the text in (case sensitive)
             * If no language code specified or the text is not available in the requested language, the text will be returned in the default language of the Domain.
             * If a language code has been given, the search takes place in texts of that language, otherwise searches will be done in the default language of the Domain.
             * If an invalid or not supported language code is given, a Bad Request will be returned.
             */
            LanguageCode?: string;
            /** The official IFC entity name to filter on (case sensitive) */
            RelatedIfcEntity?: string;
        }, params?: RequestParams) => Promise<HttpResponse<SearchResultContractV2, any>>;
        /**
         * @description The details can be requested per Classification via the Classification API
         *
         * @tags zz Obsolete APIs
         * @name SearchListOpenV2List
         * @summary Search the bSDD database, get list of Classifications without details.
         * @request GET:/api/SearchListOpen/v2
         * @deprecated
         */
        searchListOpenV2List: (query: {
            /** The namespace uri of the Domain to filter on (required) */
            DomainNamespaceUri: string;
            /** The text to search for (case and accent insensitive) */
            SearchText?: string;
            /**
             * The ISO language code to search in and to return the text in (case sensitive)
             * If no language code specified or the text is not available in the requested language, the text will be returned in the default language of the Domain.
             * If a language code has been given, the search takes place in texts of that language, otherwise searches will be done in the default language of the Domain.
             * If an invalid or not supported language code is given, a Bad Request will be returned.
             */
            LanguageCode?: string;
            /** The official IFC entity name to filter on (case sensitive) */
            RelatedIfcEntity?: string;
        }, params?: RequestParams) => Promise<HttpResponse<SearchResultContractV2, any>>;
        /**
     * No description
     *
     * @tags zz Obsolete APIs
     * @name RequestExportFilePreviewCreate
     * @summary PREVIEW
    Request a file with an export of a domain.
    Only format "Sketchup" is supported. You get an export in xsd format with limited content.
    OBSOLETE: pls use /api/DictionaryDownload/sketchup/v1
     * @request POST:/api/RequestExportFile/preview
     * @deprecated
     * @secure
     */
        requestExportFilePreviewCreate: (query: {
            /** The namespace uri of the domain to be downloaded */
            DomainNamespaceUri: string;
            /**
             * Select the Export Format you want the result in.
             * Only support format is Sketchup
             * Field can be left empty
             */
            ExportFormat?: string;
        }, params?: RequestParams) => Promise<HttpResponse<File, void | ProblemDetails>>;
        /**
         * No description
         *
         * @tags zz Obsolete APIs
         * @name PropertyV3List
         * @summary Get Property details
         * @request GET:/api/Property/v3
         * @deprecated
         */
        propertyV3List: (query: {
            /** Namespace URI of the property, e.g. http://identifier.buildingsmart.org/uri/buildingsmart/ifc-4.3/prop/AirConditioning */
            namespaceUri: string;
            /** Specify language (case sensitive). For those items the text is not available in the requested language, the text will be returned in the default language of the domain */
            languageCode?: string;
        }, params?: RequestParams) => Promise<HttpResponse<PropertyContractV3, any>>;
        /**
         * No description
         *
         * @tags zz Obsolete APIs
         * @name PropertyV2List
         * @summary Get Property details
         * @request GET:/api/Property/v2
         * @deprecated
         */
        propertyV2List: (query: {
            /** Namespace URI of the property, e.g. https://identifier.buildingsmart.org/uri/buildingsmart/ifc-4.3/prop/AirConditioning */
            namespaceUri: string;
            /** Specify language (case sensitive). For those items the text is not available in the requested language, the text will be returned in the default language of the domain */
            languageCode?: string;
        }, params?: RequestParams) => Promise<HttpResponse<PropertyContractV2, any>>;
        /**
         * No description
         *
         * @tags zz Obsolete APIs
         * @name PropertyValueV1List
         * @summary Get Property Value details
         * @request GET:/api/PropertyValue/v1
         * @deprecated
         */
        propertyValueV1List: (query: {
            /** Namespace URI of the property value */
            namespaceUri: string;
            /** Language Code */
            languageCode?: string;
        }, params?: RequestParams) => Promise<HttpResponse<PropertyValueContractV1, any>>;
        /**
         * No description
         *
         * @tags zz Obsolete APIs
         * @name MaterialV2List
         * @summary Get Material details
         * @request GET:/api/Material/v2
         * @deprecated
         */
        materialV2List: (query: {
            /** Namespace URI of the material */
            namespaceUri: string;
            /** Language Code the result will be returned in. For items the translation is not available, the default language of the domain will be returned */
            languageCode?: string;
            /** Use this option to include references to child materials */
            includeChildMaterialReferences?: boolean;
        }, params?: RequestParams) => Promise<HttpResponse<MaterialContractV2, any>>;
        /**
         * No description
         *
         * @tags zz Obsolete APIs
         * @name MaterialV1List
         * @summary Get Material details
         * @request GET:/api/Material/v1
         * @deprecated
         */
        materialV1List: (query: {
            /** Namespace URI of the material */
            namespaceUri: string;
            /** Language Code the result will be returned in. For items the translation is not available, the default language of the domain will be returned */
            languageCode?: string;
            /** Use this option to include references to child materials */
            includeChildMaterialReferences?: boolean;
        }, params?: RequestParams) => Promise<HttpResponse<MaterialContractV1, any>>;
        /**
         * @description This is a preview version! Contracts may change. The details can be requested per Material via the Material API
         *
         * @tags zz Obsolete APIs
         * @name MaterialSearchOpenPreviewList
         * @summary Search the bSDD database, get list of Materials without details.
         * @request GET:/api/Material/SearchOpen/preview
         * @deprecated
         */
        materialSearchOpenPreviewList: (query: {
            /** The namespace uri of the Domain to filter on (required) */
            DomainNamespaceUri: string;
            /** The text to search for materials (case and accent insensitive) */
            SearchText?: string;
            /**
             * The ISO language code to search in and to return the text in (case sensitive)
             * If no language code specified or the text is not available in the requested language, the text will be returned in the default language of the Domain.
             * If a language code has been given, the search takes place in texts of that language, otherwise searches will be done in the default language of the Domain.
             * If an invalid or not supported language code is given, a Bad Request will be returned.
             */
            LanguageCode?: string;
        }, params?: RequestParams) => Promise<HttpResponse<SearchResultContractV1, any>>;
        /**
         * No description
         *
         * @tags zz Obsolete APIs
         * @name DomainV3List
         * @summary Get list of available Domains
         * @request GET:/api/Domain/v3
         * @deprecated
         */
        domainV3List: (query?: {
            /**
             * Optional parameter to filter by first part of namespace URI. Use this one to get details of just one domain version
             *             or, if you leave out the version number at the end, get all the versions of a domain.
             */
            namespaceUri?: string;
        }, params?: RequestParams) => Promise<HttpResponse<DomainContractV3[], any>>;
        /**
         * No description
         *
         * @tags zz Obsolete APIs
         * @name DomainV3ClassificationsList
         * @summary Get Domain with the classification and/or material tree
         * @request GET:/api/Domain/v3/Classifications
         * @deprecated
         */
        domainV3ClassificationsList: (query: {
            /** Required parameter to select the domain. */
            namespaceUri: string;
            /** Set to true if you want a tree of classifications, set to false to get a flat list of classifications */
            useNestedClassifications?: boolean;
            /** Specify language (case sensitive). For those items the text is not available in the requested language, the text will be returned in the default language of the domain */
            languageCode?: string;
        }, params?: RequestParams) => Promise<HttpResponse<DomainWithClassificationsContractV3, any>>;
        /**
         * No description
         *
         * @tags zz Obsolete APIs
         * @name DomainV3Update
         * @summary UpdateDomainStatus
         * @request PUT:/api/Domain/v3/{organizationCode}/{code}/{version}
         * @deprecated
         * @secure
         */
        domainV3Update: (organizationCode: string, code: string, version: string, data: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @tags zz Obsolete APIs
         * @name DomainV3Delete
         * @summary Delete domain version
         * @request DELETE:/api/Domain/v3/{organizationCode}/{code}/{version}
         * @deprecated
         * @secure
         */
        domainV3Delete: (organizationCode: string, code: string, version: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @tags zz Obsolete APIs
         * @name DomainV3Delete2
         * @summary Delete all versions of domain
         * @request DELETE:/api/Domain/v3/{organizationCode}/{code}
         * @deprecated
         * @originalName domainV3Delete
         * @duplicate
         * @secure
         */
        domainV3Delete2: (organizationCode: string, code: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @tags zz Obsolete APIs
         * @name DomainV2List
         * @summary Get list of available Domains
         * @request GET:/api/Domain/v2
         * @deprecated
         */
        domainV2List: (query?: {
            /**
             * Optional parameter to filter by first part of namespace URI. Use this one to get details of just one domain version
             *             or, if you leave out the version number at the end, get all the versions of a domain.
             */
            namespaceUri?: string;
        }, params?: RequestParams) => Promise<HttpResponse<DomainContractV2[], any>>;
        /**
         * No description
         *
         * @tags zz Obsolete APIs
         * @name DomainV2ClassificationsList
         * @summary Get Domain with the classification tree
         * @request GET:/api/Domain/v2/Classifications
         * @deprecated
         */
        domainV2ClassificationsList: (query: {
            /** Required parameter to select the domain. */
            namespaceUri: string;
            /** Set to true if you want a tree of classifications, set to false to get a flat list of classifications */
            useNestedClassifications?: boolean;
            /** Specify language (case sensitive). For those items the text is not available in the requested language, the text will be returned in the default language of the domain */
            languageCode?: string;
        }, params?: RequestParams) => Promise<HttpResponse<DomainWithClassificationsContractV2, any>>;
        /**
         * No description
         *
         * @tags zz Obsolete APIs
         * @name ClassificationV4List
         * @summary Get Classification details - please use api/Class/v1 instead
         * @request GET:/api/Classification/v4
         * @deprecated
         */
        classificationV4List: (query: {
            /** Namespace URI of the classification, e.g. https://identifier.buildingsmart.org/uri/buildingsmart/ifc-4.3/class/ifcwall */
            namespaceUri: string;
            /** Use this option to include references to child classifications */
            includeChildClassificationReferences?: boolean;
            /** Specify language (case sensitive). For those items the text is not available in the requested language, the text will be returned in the default language of the domain */
            languageCode?: string;
        }, params?: RequestParams) => Promise<HttpResponse<ClassificationContractV4, any>>;
        /**
         * No description
         *
         * @tags zz Obsolete APIs
         * @name ClassificationV3List
         * @summary Get Classification details - please use api/Class/v1 instead
         * @request GET:/api/Classification/v3
         * @deprecated
         */
        classificationV3List: (query: {
            /** Namespace URI of the classification, e.g. https://identifier.buildingsmart.org/uri/buildingsmart/ifc-4.3/class/ifcwall */
            namespaceUri: string;
            /** Use this option to include references to child classifications */
            includeChildClassificationReferences?: boolean;
            /** Specify language (case sensitive). For those items the text is not available in the requested language, the text will be returned in the default language of the domain */
            languageCode?: string;
        }, params?: RequestParams) => Promise<HttpResponse<ClassificationContractV3, any>>;
        /**
         * No description
         *
         * @tags zz Obsolete APIs
         * @name ClassificationSearchOpenV1List
         * @summary Search the bSDD database using free text - please use api/Class/Search/v1 instead
         * @request GET:/api/ClassificationSearchOpen/v1
         * @deprecated
         */
        classificationSearchOpenV1List: (query: {
            /** The text to search for, minimum 3 characters (case and accent insensitive) */
            SearchText: string;
            /**
             * List of domains to filter on.
             * For a classification to be found it must be part of one of the given domains
             */
            DomainNamespaceUris?: string[];
            /**
             * List of related IFC entities to filter on.
             * For a classification to be found it must have at least one of the given Related Ifc Entities
             */
            RelatedIfcEntities?: string[];
        }, params?: RequestParams) => Promise<HttpResponse<ClassificationSearchResponseContractV1, any>>;
    };
}
export {};
