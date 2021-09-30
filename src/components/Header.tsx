import "../styles/content.scss"

interface GenreResponseProps {
        id: number;
        name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
        title: string; 
}

export function Header(props: GenreResponseProps) {
  return(
    <header>
    <span className="category">Categoria:
      <span>{props.title}</span>
    </span>
  </header>
  )
}