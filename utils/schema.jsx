import { varchar } from 'drizzle-orm/pg-core'
import {
    integer, numeric, pgTable, serial, timestamp
} from 'drizzle-orm/pg-core'

// Budget Schema
export const Budgets = pgTable(
    'budgets', {
        id: serial('id').primaryKey(),
        name: varchar('name').notNull(),
        amount: varchar('amount').notNull(),
        icon: varchar('icon'),
        createdBy: varchar('createdBy').notNull(),
        createdAt: timestamp('createdAt').defaultNow().notNull() // Adding timestamp for record creation
    }
)

// Income Schema
export const Incomes = pgTable(
    'incomes', {
        id: serial('id').primaryKey(),
        amount: numeric('amount').notNull(),  // Amount for income (numeric type for financial data)
        description: varchar('description'),  // Optional description of the income source
        date: timestamp('date').notNull().defaultNow(), // Date of income
        budgetId: integer('budgetId').references(() => Budgets.id), // Foreign key referencing Budget schema
        createdBy: varchar('createdBy').notNull(),
    }
)

// Expenses Schema
export const Expenses = pgTable(
    'expenses', {
        id: serial('id').primaryKey(),
        amount: numeric('amount').notNull(), // Amount for expense
        description: varchar('description'), // Optional description of the expense
        date: timestamp('date').notNull().defaultNow(), // Date of expense
        budgetId: integer('budgetId').references(() => Budgets.id), // Foreign key referencing Budget schema
        createdBy: varchar('createdBy').notNull(),
    }
)

