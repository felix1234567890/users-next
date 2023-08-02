'use client'
import Select from "../Select/Select";
import styles from './Filter.module.css'

export default function Filter() {
    const options =  [
      { value: '', label: 'None' },
      { value: 'asc', label: 'Age - ascending' },
      { value: 'desc', label: 'Age - descending' },
      { value: 'under40', label: 'Age - under 40' },
      { value: 'over40', label: 'Age -over 40' },
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
    ]

    const onInput = (label:string) => console.log(label)
  return (
    <div className={styles.sortBy}>
      <span className={styles.sortBy__span}>Sort by</span>
        <Select options={options} onInput={onInput} />
    </div>
  );
}
