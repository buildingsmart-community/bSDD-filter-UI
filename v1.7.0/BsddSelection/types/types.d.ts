export interface BsddClassRelation {
    uri: string;
    relationType: string;
    relatedClassUri: string;
}
export interface BsddClass {
    referenceCode: string;
    relatedIfcEntityNames: string[];
    classRelations: BsddClassRelation[];
    dictionaryUri: string;
    activationDateUtc: string;
    code: string;
    countriesOfUse: string[];
    countryOfOrigin: string;
    definition: string;
    name: string;
    uri: string;
    replacedObjectCodes: string[];
    replacingObjectCodes: string[];
    revisionNumber: number;
    status: string;
    subdivisionsOfUse: string[];
    versionDateUtc: string;
}
