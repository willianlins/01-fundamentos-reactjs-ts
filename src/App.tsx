import { Header } from './components/Header/Header'
import { Post, PostType } from './components/Post/Post'
import { Sidebar } from './components/Sidebar/Sidebar'
import './global.css'
import styles from './App.module.css'


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/willianlins.png',
      name: 'Willian lins',
      role: 'CTO de nada'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👏' },
      { type: 'paragraph', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto sint quibusdam accusamus qui. Rerum laborum eaque rem, porro fugit magnam sequi facilis a itaque aut? Vero explicabo consectetur alias voluptate.' },
      { type: 'link', content: 'Link-parsa' }
    ],
    publishAt: new Date('2023-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/willian.png',
      name: 'uilha',
      role: 'Vagabundo faz nada'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👏' },
      { type: 'paragraph', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto sint quibusdam accusamus qui. Rerum laborum eaque rem, porro fugit magnam sequi facilis a itaque aut? Vero explicabo consectetur alias voluptate.' },
      { type: 'link', content: 'eo-pix' }
    ],
    publishAt: new Date('2023-11-14 16:00:00'),
  }
]


function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
