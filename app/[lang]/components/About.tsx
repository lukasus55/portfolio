type Dictionary = typeof import('../../../dictionaries/en.json');

export default function About({ dict } : { dict: Dictionary }) {
    return (
        <div className='flex w-full justify-center z-10 pt-24' id='about'>
            <div className="rounded-3xl shadow-xl w-1/2 text-justify">
                <h3 className='text-2xl opacity-80'> About me </h3>
                <p className='opacity-60'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita assumenda quaerat sapiente aut eos iure. Tempora eligendi reiciendis consequuntur repellendus dolor laboriosam eveniet, hic numquam sed natus deserunt facere nemo?</p>
            </div>
        </div>
    )
}