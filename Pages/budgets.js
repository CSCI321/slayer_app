import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TouchableOpacity, Button } from 'react-native';

export default function Budgets(props) {

    const category = props.category;
    const expense = props.expense;
    const budget = props.budget;

    return (

        <div>
            <div className='col-md-4'>
                <div className="card" style={{ flexDirection: 'row' }}>
                    <div className="card">
                        <div className="card-header">{category}</div>
                        <div className="card-body" style={{ width: 300, height: 200, paddingLeft: 40 }}>
                        <div>{currencyFormat.format(expense)}/{currencyFormat.format(budget)}</div>
                        <a href="#" class="btn btn-primary">Edit Budget</a>
                        </div>
                    </div>
                </div>
            </div> 
        </div> 
                
 
  )
}

export const currencyFormat = new Intl.NumberFormat(undefined, {
    style: 'currency', 
    currency: 'usd'
})
