import React, { Component, useState } from 'react';
import styles from './ItemList.module.css';
import ItemEntry from '../ItemEntry/ItemEntry.js';
import JackIt from '../Jackit/Jackit.js';

// Add button onClick will create a new ItemEntry component in the listcontainer and in the state
// Style the Add button and Jackit button


export default function ItemList()  {
    const addRow = async e => {
        var newEntry = [
            { itemEntry: "HELLO WORLD", value: 0 }];
        var data = rows;
        data.push(newEntry);
        setRows([...data]);
    }

    const initialValue = [
        { itemEntry: "HELLO WORLD", value: 0 }];
    const [rows, setRows] = useState(initialValue);


        console.log(rows[0].itemEntry)
        return (
            <div className={`${styles.container} ${styles.flex}`}>
                <div className={styles.header}>List</div>
                <table className={`${styles.listContainer} ${styles.flex}`}>
                    <tr>
                        <td><ItemEntry/></td>
                    </tr>
                </table>
                <button className={styles.button} onClick={e => addRow(e)}>ADD NEW ITEM</button>
                <div className={styles.totalBias}>{rows[0].value}</div>
                <div><JackIt/></div>
            </div>
        )
}