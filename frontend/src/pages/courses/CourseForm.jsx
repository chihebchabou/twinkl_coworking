/* eslint-disable react/prop-types */
import { Button, Label, TextInput, Textarea } from "flowbite-react";
// import { FaTrashAlt } from "react-icons/fa";
import { Form } from "react-router-dom";

const CourseForm = ({ data, edit, setData, slug, actionData }) => {
  const errors = actionData && actionData.status === 400 && actionData.message.split('.') || [];
  
  return (
    <Form className="flex max-w-md flex-col gap-4 w-full" method="POST" action={`/admin/courses/${!edit ? "create" : `${slug}/edit`}`}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="courseName" value="Formation" />
        </div>
        <TextInput
          id="courseName"
          type="text"
          name="courseName"
          value={data.courseName}
          onChange={(e) => setData({...data, [e.target.name]: e.target.value})}
          placeholder="ex: Digital Marketing"
        />
        <small className="text-red-600">{errors.find(element => element.includes(`"courseName"`))}</small>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="duration" value="Durée" />
        </div>
        <TextInput
          id="duration"
          type="text"
          name="duration"
          value={data.duration}
          onChange={(e) => setData({...data, [e.target.name]: e.target.value})}
          placeholder="ex: 3 mois"
        />
        <small className="text-red-600">{errors.find(element => element.includes(`"duration"`))}</small>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="price" value="Prix" />
        </div>
        <TextInput
          id="price"
          type="text"
          name="price"
          value={data.price}
          onChange={(e) => setData({...data, [e.target.name]: e.target.value})}
          placeholder="ex: 300"
        />
        <small className="text-red-600">{errors.find(element => element.includes(`"price"`))}</small>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="skills" value="Compétences" />
        </div>
       
          <TextInput
            className="flex-1"
            id="skills"
            type="text"
            name="skills"
            value={data.skills}
            onChange={(e) => setData({...data, [e.target.name]: e.target.value})}
            placeholder="ex: competence 1, competence 2"
          />
          <small className="text-red-600">{errors.find(element => element.includes(`"skills"`))}</small>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="content" value="Contenu" />
        </div>
        <Textarea
          id="content"
          type="text"
          name="content"
          value={data.content}
          onChange={(e) => setData({...data, [e.target.name]: e.target.value})}
          placeholder="ex: contenu 1, contenu 2,..."
        />
        <small className="text-red-600">{errors.find(element => element.includes(`"content"`))}</small>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="studyField" value="Domaine" />
        </div>
        <TextInput
          list="studyField"
          id="studyField"
          type="text"
          name="studyField"
          value={data.studyField.name}
          onChange={(e) => setData({...data, [e.target.name]: e.target.value})}
          placeholder="e: Marketing"
        />
        <small className="text-red-600">{errors.find(element => element.includes(`"studyField"`))}</small>
        <datalist id="studyFields">
          <option value="Computer Science"></option>
          <option value="Design"></option>
        </datalist>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="description" value="Desciption" />
        </div>
        <Textarea
          id="description"
          type="text"
          name="description"
          value={data.description}
          onChange={(e) => setData({...data, [e.target.name]: e.target.value})}
          placeholder="ex: une desciption de la formation"
        />
        <small className="text-red-600">{errors.find(element => element.includes(`"description"`))}</small>
      </div>
      <Button type="submit">Confirmer</Button>
      <a
        href="#"
        onClick={() => {}}
        className="flex justify-center items-center text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800"
      >
        Annuler
      </a>
    </Form>
  );
};



export default CourseForm;
