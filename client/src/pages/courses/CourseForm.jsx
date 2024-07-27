import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CourseForm = ({ onSubmit, course, skill, onChange, onAddSkill, onRemoveSkill }) => {

    const { courseName, duration, price, description, skills, studyField: { name } } = course;

    const navigate = useNavigate()

    return (
        <form onSubmit={onSubmit} className="flex max-w-md flex-col gap-4 w-full">
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="courseName" value="Formation" />
                </div>
                <TextInput id="courseName" type="text" name="courseName" value={courseName} onChange={onChange} placeholder="Entrez le nom de la formation" />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="duration" value="Durée" />
                </div>
                <TextInput id="duration" type="text" name="duration" value={duration} onChange={onChange} placeholder="Entrez la durée de la formation" />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="price" value="Prix" />
                </div>
                <TextInput id="price" type="text" name="price" value={price} onChange={onChange} placeholder="Entrez la durée de la formation" />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="skills" value="Compétences" />
                </div>
                <div className="flex gap-2 mb-3">
                    <TextInput className="flex-1" id="skill" type="text" name="skill" value={skill} onChange={onChange} placeholder="Entrez une competence de la formation" />
                    <Button color="light" type='button' onClick={onAddSkill}>ajouter </Button>
                </div>
                {skills.map((skill, i) => (<span className='text-sm flex justify-between items-center ps-4 py-2 dark:text-gray-500' key={i}>- {skill} <FaTrashAlt size="20" className='text-red-500' onClick={(e) => {
                    e.preventDefault()
                    onRemoveSkill(skill)
                }} /></span>))}
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="studyField" value="Domaine" />
                </div>
                <TextInput list="studyField" id="studyField" type="text" name="studyField" value={name} onChange={onChange} placeholder="Entrez le domaine de la formation" />

                <datalist id='studyFields'>
                    <option value="Computer Science"></option>
                    <option value="Design"></option>
                </datalist>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="description" value="Desciption" />
                </div>
                <Textarea id="description" type="text" name="description" value={description} onChange={onChange} placeholder="Entrez une desciption de la formation" />
            </div>

            <Button type="submit">Confirmer</Button>
            <a href="#" onClick={(e)=> {
                e.preventDefault();
                navigate('/admin/courses')
            }} className="flex justify-center items-center text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800">Annuler</a>
        </form>
    );
}

export default CourseForm