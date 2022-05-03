import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TouchableOpacity, Button } from 'react-native';
import "bootswatch/dist/yeti/bootstrap.min.css";
import { ProgressBar } from 'react-bootstrap';

export default function Budgets(props) {

    const category = props.category;
    const expense = props.expense;
    const budget = props.budget;

    return (

        <div>
                <div className="card">
                    <div className="card">
                        <div className="card-header align-self: center">{category}</div>
                        <div className="card-body" style={{ width: 300, height: 200, paddingLeft: 40 }}>
                        <div>{currencyFormat.format(expense)} / {currencyFormat.format(budget)}</div>
                        <div class="mt-md-4"></div>
                        <ProgressBar className="progress-bar-striped"
                            min={0} now={expense} max={budget}
                        /><div class="mt-md-4"></div>
                        <a href="#" class="btn btn-primary">Edit Budget</a>

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
