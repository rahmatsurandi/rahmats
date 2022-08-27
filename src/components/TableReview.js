import React from 'react'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";

function TableReview() {
    const data = [
        {
            label: "Owner Information",
            value: "OwnerInformation",
            ownerInformation: `rahmat surandi`,
            ownerEmail: 'rahmatsurandi@gmail.com',
            ownerPhoneNumber: '081386171495',
            ownerIdentityCard: '......',


        },
        {
            label: "Busines Information",
            value: "Busines Information",
            businesName: `Pt.colang-caling`,
            businesNumber: '081386171495',
            country: 'indonesia',
            state: 'jakarta',
            city: 'jakarta',
            completeAdress: 'bulak jaya jakarta timur',
            businesProfile: '.......'
        },

        {
            label: "Acount information",
            value: "Acount information",
            email: `Rahmatsurandi@gmail.com`,
            phone: '081386171495',
        },
    ];

    return (
        <Tabs id="custom-animation" value="html">
            <TabsHeader>
                {data.map(({ label, value }) => (
                    <Tab key={value} value={value}>
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody
                animate={{
                    mount: { y: 0 },
                    unmount: { y: 250 },
                }}
            >
                {data.map(({ value, country, state, city, email, phone, completeAdress, businesProfile, ownerInformation, ownerEmail, ownerIdentityCard, ownerPhoneNumber, businesName, businesNumber, }) => (
                    <TabPanel key={value} value={value}>
                        <ul>
                            <li>{ownerInformation}</li>
                            <li>{ownerEmail}</li>
                            <li>{ownerPhoneNumber}</li>
                            <li>{ownerIdentityCard}</li>
                            <li>{businesName}</li>
                            <li>{businesNumber}</li>
                            <li>{country}</li>
                            <li>{state}</li>
                            <li>{city}</li>
                            <li>{completeAdress}</li>
                            <li>{businesProfile}</li>
                            <li>{email}</li>
                            <li>{phone}</li>
                        </ul>
                    </TabPanel>
                ))}


            </TabsBody>
        </Tabs>
    );
}


export default TableReview