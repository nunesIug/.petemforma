import { motion } from "motion/react";

export function Buy() {
    return (
        <div className="text-center p-4">
            <h2 className="text-2xl mb-3 font-semibold mt-28">
                ESSA OFERTA PODE ACABAR EM BREVE.
            </h2>

            <div className="bg-neutral-800 p-3 rounded-lg md:w-96 w-80 text-white text-center mx-auto font-light duration-200 mb-20">
                POR APENAS

                <br />
                <br />

                2x VEZES DE
                <p className="md:text-6xl text-5xl font-bold mb-1">
                    R$ 9,98
                </p>

                OU

                <p className="md:text-5xl text-4xl font-bold mt-1">
                    R$ 18,97 <a className="font-light text-2xl md:-ml-2">à vista</a>
                </p>

                < motion.button 
                
                    whileHover={{
                        scale: 1.05
                    }}
                    whileTap={{
                        scale: 0.98
                    }}

                    className="bg-emerald-600 pl-4 pr-4 p-2 rounded-sm font-semibold mt-7 cursor-pointer hover:bg-emerald-700 mb-2"
                
                >

                    <a href="https://pay.hotmart.com/R98916881M?bid=1743133849031" target="_blank">

                        COMPRAR AGORA

                    </a>

                </motion.button>

                <p className="text-sm mt-3 mb-1">
                    PAGAMENTO 100% SEGURO COM ACESSO IMEDIATO.
                </p>

            </div>
        </div>
        
    );
};