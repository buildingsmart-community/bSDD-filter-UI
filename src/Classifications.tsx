import { useState, useEffect, Children } from 'react';
import { Form } from 'react-bootstrap';
import { Api, ClassificationContractV4 } from './BsddApi';

var api = new Api();
api.baseUrl = 'https://test.bsdd.buildingsmart.org';

interface Props {
  activeClassificationUri: string | undefined;
  recursiveMode: boolean;
}

function Classifications(props: Props) {
  const [classifications, setClassifications] = useState<string[]>([]);
  const [classificationCount, setClassificationCount] = useState<number>(0);
  const [classificationUris, setClassificationUris] = useState<{ [id: string]: Promise<ClassificationContractV4 | null> }>({});

  function getClassification(classificationUri: string): Promise<ClassificationContractV4 | null> {
    var p: Promise<ClassificationContractV4 | null> = new Promise(function (resolve, reject) {
      var queryParameters = {
        namespaceUri: classificationUri,
        includeChildClassificationReferences: true,
        // languageCode: 'NL'
      }
      resolve(
        api.api.classificationV4List(queryParameters)
          .then((response) => {
            if (response.status !== 200) {
              // reject();
              console.log('Status error...');
              console.log(response.status);
              return null;
            }
            return response.data;
          })
          .catch(err => {
            console.log('Catch error...');
            console.log(err);
            return null;
          }));
    });
    setClassificationUris({
      ...classificationUris,
      classificationUri: p
    });
    return p;
  }

  useEffect(() => {
    setClassificationCount(0);
    if (props.activeClassificationUri) {
      var initialClassificationUris: { [id: string]: Promise<ClassificationContractV4 | null> } = {};
      if (props.activeClassificationUri) {
        initialClassificationUris[props.activeClassificationUri] = getClassification(props.activeClassificationUri);
      }
      setClassificationUris(initialClassificationUris);
    }
  }, [props.activeClassificationUri]);

  useEffect(() => {
    if (classificationCount === Object.keys(classificationUris).length) {
      return;
    }
    var c = Object.keys(classificationUris).length;
    setClassificationCount(c);
    Promise.allSettled(Object.values(classificationUris)).then(function (results) {
      var r = results.map((result) => {
        if (result.status === 'fulfilled') {
          var c = result.value;
          if (c && c.name) {
            return c.name;
          } else {
            return 'unknown';
          }
        }
        return 'unknown';
      });

      setClassifications(r);
      var r1 = results.map((result) => {
        if (result.status === 'fulfilled') {
          var c = result.value;
          if (c && c.classificationRelations) {
            var extendedClassificationUris: { [id: string]: Promise<ClassificationContractV4 | null> } = { ...classificationUris };
            c.classificationRelations.forEach(classificationRelation => {
              if (!(classificationRelation.relatedClassificationUri in Object.keys(classificationUris))) {
                extendedClassificationUris[classificationRelation.relatedClassificationUri] = getClassification(classificationRelation.relatedClassificationUri);
              }
            });
            setClassificationUris(extendedClassificationUris);
          }
        }
        return 'unknown';
      });
    });
  }, [classificationUris, classificationCount, setClassificationCount, getClassification]);

  return (
    <div>
      {Children.toArray(
        classifications.map((classification, index) =>
          <Form.Group className="mb-3 row" key={index}>
            <Form.Label className="col-sm-5 col-form-label">{classification}</Form.Label>
            <div className="col-sm-7">
              <Form.Control placeholder={classification} disabled />
            </div>
          </Form.Group>
        )
      )}
    </div>
  )
}
export default Classifications;