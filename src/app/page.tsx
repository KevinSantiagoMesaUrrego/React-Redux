'use client'
import { useAppDispatch, UseAppSelector } from '@/redux/hooks';
import { increment, decrement, reset, imprimir} from '@/redux/features/counterSlice'
import styles from './page.module.css';
import React, { useState } from 'react'

function HomePage() {
  const [c, setC] = useState<string>();
  const { value, nombre } = UseAppSelector(state => state.counterReducer)

  const dispatch = useAppDispatch()
  console.log(c)
  return (<div>
    <h1>{value}</h1>

    <div className={styles.div1}>
      <input type="ingrese" onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setC(event.target.value) }} className={styles.input} />
      <button onClick={() => { dispatch(increment(c)) }} className={styles.boton}>Imcrementar</button>
      <button onClick={() => { dispatch(decrement()) }} className={styles.boton}>decrementar</button>
      <button onClick={() => { dispatch(reset()) }} className={styles.boton}>reset</button>
    </div>
    <div>
      <h1>{nombre}</h1>
      <button onClick={() => { dispatch(imprimir(c)) }} className={styles.boton}>imprimir</button>
    </div>
  </div>
  )
}
export default HomePage