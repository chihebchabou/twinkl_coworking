import React from 'react'

const CourseForm = ({ onSubmit, course, skill, onChange, onAddSkill, onRemoveSkill }) => {

    const { courseName, duration, price, description, skills, studyField: { name } } = course

    return (
        <form onSubmit={onSubmit} className="flex flex-col space-y-3 md:px-8 w-2/3">

            <div className='flex flex-col space-y-2'>
                <label htmlFor="courseName">Formation</label>
                <input type="text" name="courseName" id="courseName" value={courseName} onChange={onChange} placeholder='Entrez le nom de la formation' className='p-3 outline-none border border-black focus:border-brightRed' />
            </div>


            <div className='flex flex-col space-y-2'>
                <label htmlFor="duration">Durée</label>
                <input type="text" name="duration" id="duration" value={duration} onChange={onChange} placeholder='Entrez la durée de la formation' className='p-3 outline-none border border-black focus:border-brightRed' />
            </div>

            <div className='flex flex-col space-y-2'>
                <label htmlFor="price">Prix</label>
                <input type="text" name="price" id="price" value={price} onChange={onChange} placeholder='Entrez le prix de la formation' className='p-3 outline-none border border-black focus:border-brightRed' />
            </div>

            <div className='flex flex-col space-y-2'>
                <label htmlFor="skills">Compétences</label>
                <div className='flex'>
                    <input type="text" name="skill" id="skill" value={skill} onChange={onChange} placeholder='Entrez une competence de la formation' className='flex-1 p-3 outline-none border border-black focus:border-brightRed' />

                    <button type='button' className='self-end p-3 border border-s-0 border-black bg-black text-white' onClick={onAddSkill}>ajouter </button>
                </div>
                {skills.map((skill, i) => (<span className='text-sm flex justify-between items-center ps-4' key={i}>- {skill} <a className='text-red-500 hover:text-white border border-red-500 bg-red-100 hover:bg-red-600 px-2 py-1' href="#" onClick={(e) => {
                    e.preventDefault()
                    onRemoveSkill(skill)
                }}>suprimer</a></span>))}
            </div>

            <div className='flex flex-col space-y-2'>
                <label htmlFor="studyField">Domaine</label>
                <input list='studyFields' type="text" name="studyField" id="studyField" value={name} onChange={onChange} placeholder='Entrez le prix de la formation' className='p-3 outline-none border border-black focus:border-brightRed' />

                <datalist id='studyFields'>
                    <option value="Computer Science"></option>
                    <option value="Design"></option>
                </datalist>
            </div>

            <div className='flex flex-col space-y-2'>
                <label htmlFor="description">Desciption</label>
                <textarea name="description" id="description" value={description} onChange={onChange} rows={10} className='p-3 outline-none border border-black focus:border-brightRed'></textarea>
            </div>


            <div className="flex justify-end">
                <button type="submit" className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block">Confirmer</button>
            </div>
        </form>
    )
}

export default CourseForm