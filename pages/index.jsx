import Link from 'next/link'

const Index = ()=>{
    return(
        <div>
            Hey there it's Maruf's Portfolio Website
            <div>
                <Link href="/about">
                <a>About Page</a>
                </Link>
            </div>
        </div>
    )
}

export default Index;