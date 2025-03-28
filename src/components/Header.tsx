import { motion } from "motion/react";

export function Header() {
    return(

        < motion.header 
            initial= {{
                opacity: 0, y: 15
            }}
            animate= {{
                opacity: 1, y: 0
            }}
            transition= {{
                duration: 0.3
            }}
        >
            <header className="text-center pl-4 pr-4 mt-10 mb-4">
                <h2 className="text-5xl font-bold">
                    Seu Pet em <a className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">Forma</a>, Hoje.
                </h2>
            </header>
        </motion.header>
        
    );
};