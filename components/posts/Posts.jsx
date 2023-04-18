import Post from "./Post";
import avaliacoes from './js/avaliacoes.js';

export default function Posts() {
    return(
        <div className="root">
            {avaliacoes.map((avaliacao, index) => (
                <Post key={index} titulo={avaliacao.titulo} foto={avaliacao.foto} recomendacao={avaliacao.recomendacao} depoimento={avaliacao.depoimento} />  
            ))}
        </div>
    );
}