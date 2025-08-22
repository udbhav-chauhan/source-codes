#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_ITEMS 100

typedef struct {
    char name[50];
    float price;
    int quantity;
} Item;

void displayBill(Item items[], int count) {
    float total = 0;
    printf("\n\tMall Billing System\n");
    printf("--------------------------------------\n");
    printf("%-20s %-10s %-10s\n", "Item", "Quantity", "Price");
    printf("--------------------------------------\n");
    
    for (int i = 0; i < count; i++) {
        printf("%-20s %-10d $%-9.2f\n", items[i].name, items[i].quantity, items[i].price * items[i].quantity);
        total += items[i].price * items[i].quantity;
    }
    
    printf("--------------------------------------\n");
    printf("Total Bill: $%.2f\n", total);
}

int main() {
    Item items[MAX_ITEMS];
    int count = 0;
    char choice;
    
    do {
        printf("Enter item name: ");
        scanf("%s", items[count].name);
        printf("Enter item price: ");
        scanf("%f", &items[count].price);
        printf("Enter item quantity: ");
        scanf("%d", &items[count].quantity);
        count++;
        
        printf("Do you want to add another item? (y/n): ");
        scanf(" %c", &choice);
    } while (choice == 'y' && count < MAX_ITEMS);
    
    displayBill(items, count);
    return 0;
}