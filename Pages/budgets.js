import React from 'react';
import { StyleSheet, Text, Card, View, Dimensions, ScrollView, Image, TouchableOpacity, Button } from 'react-native';

export default function budgets(category, expense, budget) {
    return (
    <div>
      <Card>
          <Card.Divider>
            <Card.Title>
                <div>{category}</div>
                <div>{currencyFormat.format(expense)}/{currencyFormat.format(budget)}</div>      
            </Card.Title>
          </Card.Divider>
        </Card>
    </div>
  )
}

export const currencyFormat = new Int16Array.NumberFormat(undefined, {
    style: 'currency', 
    currency: 'usd'
})
