import { useAlert } from '@/context/alert/alertContext';
import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
// import { FaTrashAlt } from "react-icons/fa";
import { Form } from 'react-router-dom';
import { updateUserProfile } from '@/utils/api';
import { useActionData } from 'react-router-dom';
import { useState } from 'react';
let email
const Admin = () => {
  const data = useOutletContext();
  const [firstName, setFirstName] = useState(data.user.firstName)
  const [lastName, setLastName] = useState(data.user.lastName)

  email = data.user.email;
  // const [email, setEmail] = useState(data.user.email)
  const [address, setAddress] = useState(data.user.address)
  const [phone, setPhone] = useState(data.user.phone)
  const [facebook, setFacebook] = useState(data.user.facebook)
  const [instagram, setInstagram] = useState(data.user.instagram)

  const actionData = useActionData();
  console.log("actionData", actionData);
  
  console.log(data.user);
  const { setAlert } = useAlert();

  useEffect(() => {
    setAlert(data.message, 'success');
    if (actionData && actionData.status >= 400)
      setAlert(actionData.message, 'failure');

    else if (actionData)
      setAlert(actionData.message, 'success');
  }, [actionData]);
  return (
    <>
      <span className="text-black dark:text-white block mb-5">
        Welcome {data.user.firstName}{' '}
      </span>

      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-6 w-full border-b border-gray-600 pb-4 text-center text-2xl dark:text-white">
          Les informations de l&lsquo;administrateur
        </h1>
        <Form className="flex max-w-md flex-col gap-4 w-full" method="POST" action='/admin/dashboard'>
        <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput
              id="email"
              type="email"
              name="email"
              disabled={true}
              value={email}
              // onChange={e => setEmail(e.target.value)}
              placeholder="ex: 300"
            />
            {/* <small className="text-red-600">{errors.find(element => element.includes(`"price"`))}</small> */}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="firstName" value="Prénom" />
            </div>
            <TextInput
              id="firstName"
              type="text"
              name="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              placeholder="ex: Digital Marketing"
            />
            {/* <small className="text-red-600">{errors.find(element => element.includes(`"courseName"`))}</small> */}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="lastName" value="Nom" />
            </div>
            <TextInput
              id="lastName"
              type="text"
              name="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              placeholder="ex: 3 mois"
            />
            {/* <small className="text-red-600">{errors.find(element => element.includes(`"duration"`))}</small> */}
          </div>
          
          <div>
            <div className="mb-2 block">
              <Label htmlFor="address" value="Adresse" />
            </div>

            <TextInput
              className="flex-1"
              id="address"
              type="text"
              name="address"
              value={address}
              onChange={e => setAddress(e.target.value)}
              placeholder="ex: competence 1, competence 2"
            />
            {/* <small className="text-red-600">{errors.find(element => element.includes(`"skills"`))}</small> */}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="phone" value="Téléphone" />
            </div>

            <TextInput
              className="flex-1"
              id="phone"
              type="tel"
              name="phone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              placeholder="ex: competence 1, competence 2"
            />
            {/* <small className="text-red-600">{errors.find(element => element.includes(`"skills"`))}</small> */}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="facebook" value="Facebook" />
            </div>

            <TextInput
              className="flex-1"
              id="facebook"
              type="url"
              name="facebook"
              value={facebook}
              onChange={e => setFacebook(e.target.value)}
              placeholder="ex: competence 1, competence 2"
            />
            {/* <small className="text-red-600">{errors.find(element => element.includes(`"skills"`))}</small> */}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="instagram" value="Instagram" />
            </div>

            <TextInput
              className="flex-1"
              id="instagram"
              type="url"
              name="instagram"
              value={instagram}
              onChange={e => setInstagram(e.target.value)}
              placeholder="ex: competence 1, competence 2"
            />
            {/* <small className="text-red-600">{errors.find(element => element.includes(`"skills"`))}</small> */}
          </div>

          <Button type="submit">Confirmer</Button>
        </Form>
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = {
    ...Object.fromEntries(formData),email
  };

  try {
    return await updateUserProfile(data);
  } catch (error) {
    console.log(error);
    if (error.status === 400) {
      return error;
    }
  }
};

export default Admin;
