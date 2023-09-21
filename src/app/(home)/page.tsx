import Image from 'next/image'
// import getProducts, { ProductParams } from '../actions/getProducts'

interface HomeProps {
  searchParmas: ProductParams
}
export default async function Home({searchParmas} : HomeProps) {
    // const products = await getProducts(searchParmas)

  return (
    <main>
         <p> 누구나 볼 수 있는 페이지 입니다.</p>
    </main>
  

  )
}
