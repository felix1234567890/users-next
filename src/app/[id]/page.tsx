'use client'
import { useParams } from 'next/navigation';

export default function UserById() {
  const params = useParams();
  console.log(params)
  return <h1>{params.id}</h1>;
}
