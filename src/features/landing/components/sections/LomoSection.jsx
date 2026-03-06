import style from './HeroSection.module.css';
import lomoBg from '../../../../assets/lomoBg.svg';
import lomoVoiceShape from '../../../../assets/lomoVoiceShape.svg';

function LomoSection() {
    return (
        <section id='lomo' className={`section-padding-large ${style.vh120}  position-relative bg-black`}>
            <div className={`container-custom ${style.w90} ${style.h90} bg-black rounded-5 lumos-shadow d-flex px-0 overflow-hidden`}>
                <div className={`d-flex flex-column justify-content-center align-items-start ${style.w55} h-100 p-5 bgCustomGray`}>
                    <div>
                        <p className=' text-orange-lumos text-start display-6 fw-medium'>POWERED BY ADVANCED AI </p>
                        <h2 className=' text-white display-5 fw-bolder'>LUMO - YOUR INTELLIGENT </h2>
                        <h2 className=' text-orange-lumos display-5 fw-bolder'>Voice Companion  </h2>
                    </div>

                    <div>
                        <p className=' text-white fs-5 fw-normal text-start mt-4'>Lumo is the intelligent voice assistant at the heart of the Lumos ecosystem, designed to bring clarity, independence, and reassurance. More than just a voice, Lumo is a constant presence-listening, guiding, and responding with calm, reliable support.
                        </p>
                    </div>

                    <div>
                        <p className=' text-white fs-5 fw-normal text-start mt-4'>Powered by multimodal LLMs, Lumo understands natural speech and communicates in a clear, friendly way. Whether it's offering guidance or helping you manage connected tools, Lumo works quietly in the background to make sure you always know what's happening.
                        </p>
                    </div>

                </div>
                <div className={`d-flex flex-column justify-content-center align-items-center ${style.w45} h-100 p-5`} style ={{backgroundImage: `url(${lomoBg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className='w-25'> 
                        <img className=' w-100 ' src={lomoVoiceShape} alt="Lomo Voice Shape" />
                    </div>
                    <p className=' text-orange-lumos text-center mt-3 display-6'>lUMO IS LISTNING . . . . . .</p>
                </div>
            </div>
        </section>
    )
}

export default LomoSection