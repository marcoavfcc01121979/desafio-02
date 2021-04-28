import '../styles/sidebar.scss'
import { Button } from './Button'

interface Genero {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;  
}

interface SidebarProps {
  genero: Genero[];
  funcao: (id: number) => void;
  id: number;
}

export function SideBar({ funcao, genero, id }: SidebarProps) {
  // Complete aqui
  return(
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genero.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => funcao(genre.id)}
              selected={id === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}