'use client'
import Select from "../Select/Select";
import styles from './Filter.module.css'

export default function Filter() {
    const options = [{label:'Frane'}, {label:'Jure'}]
    const onInput = (label:string) => console.log(label)
  return (
    <div className={styles.sortBy}>
      <span className={styles.sortBy__span}>Sort by</span>
        <Select options={options} onInput={onInput} />
    </div>
  );
}
