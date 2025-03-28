import { Star } from 'lucide-react';

export function About() {
    return(
        <div className="text-center">
            <p className="font-semibold bg-gradient-to-r from-emerald-700 to-emerald-200 bg-clip-text text-transparent pl-3 pr-3">
                Nutrição saúdavel + Exercicios fisicos = Pet feliz.
            </p>
            <h2 className="text-3xl font-semibold mb-3">
                O que produzimos para você?
            </h2>
            <p className="font-light pl-12 pr-12 mb-20">
                Te ensinamos o que é exatamente a Obesidade para os animais, como identificar obesidade em seu Pet. <br />
                Instruções sobre estabelecer uma dieta Nutritiva ao seu animal,
                Dentre mais informações valiosas para seu Pet. Você não vai querer ficar sem!
            </p>


            <div className='inline-flex text-amber-200'>
                < Star className='mt-3'/>
                < Star size={30}/>
                < Star className='mt-3'/>
            </div>
            <article className="pl-5 pr-5">
                <div className="bg-gradient-to-r from-emerald-700 to-emerald-300 bg-clip-text text-transparent pb-4">
                    <h3 className="text-4xl font-semibold">
                        Nosso eBook garante a você 
                    </h3>
                </div>
                
                <hr className="md:w-2/3 mx-auto text-yellow-300 mb-2"/>

                <p className="md:text-6xl text-4xl font-bold duration-200">
                    Garantia incondicional de 7 dias
                </p>

                <hr className="md:w-2/3 mx-auto text-yellow-300 mt-4"/>

                <p className="mt-3">
                    Seu dinheiro de volta <strong> sem perguntas </strong> até 7 dias após a compra.
                </p>

            </article>
        </div>
    );
};