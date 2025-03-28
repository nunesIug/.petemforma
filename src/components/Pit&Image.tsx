import { WandSparkles } from "lucide-react";
import Imagebook from "./Imagebook.png";
import { motion } from "motion/react";

export function PitImage() {
    return (
        < motion.div 
            initial= {{
                opacity: 0, y: 17
            }}
            animate= {{
                opacity: 1, y: 0
            }}
            transition= {{
                duration: 0.7
            }}
        >
            <div className="lg:flex lg:justify-center lg:items-center duration-300">
                <div className="p-15">
                    <h3 className="text-4xl font-semibold mb-2">
                        Um eBook pode mudar completamente  <br />
                        a expectativa de <a className="text-emerald-500">longevitude</a> do seu Animal.
                    </h3>
                    <p className="font-light mb-10 text-xl">
                        <i>
                            Não somos só mais um eBook qualquer. <br />
                            Feito especialmente para você que tem Cães ou Gatos. <br />
                            Nós abordamos esse tema para todos, te ensinando como livrar seu Pet dessa doença de uma vez por todas! 
                        </i>
                    </p>

                    < motion.button 
                        whileHover={{
                            scale: 0.98
                        }}
                        whileTap={{
                            scale: 1.03
                        }}
                    
                        className="bg-emerald-500 font-semibold px-7 py-2 rounded-lg hover:bg-emerald-600 cursor-pointer inline-flex"
                    >
                        < WandSparkles 
                            className="mr-2"
                        />
                        Quero comprar agora!
                    
                    </motion.button>
                </div>

                <div className="lg:p-16 pl-16 pr-16 pt-8">
                    
                    < motion.button
                        whileHover={{
                            scale: 0.99
                        }}

                        className="duration-200"
                    >
                        <img src={Imagebook} alt="Seu Pet em Forma imagem eBook." className="w-72 rounded-sm"/>

                    </motion.button>

                </div>
            </div>
        </motion.div>
    );
};