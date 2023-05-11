// const Fields = Parse.Object.extend("Fields");

// allFields.map((fields) => {
//   const query = new Parse.Query(Fields);
//   query.equalTo("Name", fields.name);
//   const results = query.find().then(
//     (results) => {
//       for (let i = 0; i < results.length; i++) {
//         const object = results[i];
//         const SubFields = Parse.Object.extend("SubFields");
//         fields.tables.map((field) => {
//   const subField = new SubFields();
//   subField.set("Name", field.label);
//   subField.set("Field", object);

//   subField.save().then(
//     (subField) => {
//       console.log("New object created with objectId: " + subField.id);
//     },
//             (error) => {
//               console.log(
//                 "Failed to create new object, with error code: " + error.message
//               );
//             }
//           );
//         });
//       }
//     },
//     (error) => {
//       console.log("Error: " + error.code + " " + error.message);
//     }
//   );
// });


import React, { useEffect, useState } from 'react';
import Parse from 'parse';

const Fields = () => {
    const [itemData, setItemData] = useState([]);
    const [subFieldsItem, setSubFieldsItem] = useState([]);
    const [subShow, setSubShow] = useState([]);

    const Fields = Parse.Object.extend("Fields");
    const fieldsQuery = new Parse.Query(Fields);

    const SubFields = Parse.Object.extend('SubFields');
    const subFieldsQuery = new Parse.Query(SubFields);

    useEffect(() => {
        fieldsQuery.find().then((results) => {
            // Map and set item data
            const data = results.map(result => {
                return {
                    id: result.id,
                    name: result.get('Name'),
                }
            });
            setItemData(data);
        })

    }, []);


    useEffect(() => {
        subFieldsQuery.find().then(results => {
            console.log(results);
            const subData = results.map(result => result);

            setSubFieldsItem(subData);
        })
            .catch(error => {
                console.log(error);
            });
    }, [])


    // console.log(itemData, subFieldsItem);
    useEffect(() => {
        const matchedData = itemData.map(item => {
            const matchedSubFields = subFieldsItem.filter(subItem => subItem.attributes?.Field?.id === item?.id);
            return {
                ...item,
                subFields: matchedSubFields
            };
        });

        setSubShow(matchedData);
        console.log(matchedData);
    }, [itemData, subFieldsItem])

    return (
        <div>
            <p>Show Fields Data:

               {
                subShow.map(s => <div>
                    <p>{s?.name}</p>
                    <hr />
                    {
                        s?.subFields?.map(sf => <ul>
                            <li>{sf?.attributes?.Name}</li>
                        </ul>)
                    }
                    <hr />
                </div>)
               }
            </p>
        </div>
    );
};

export default Fields;