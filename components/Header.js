import Link from 'next/link'


const Header = ()=>{
    return (
        <nav>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/hireme"><a>Hireme</a></Link>
        </nav>
    )

}

export default Header;