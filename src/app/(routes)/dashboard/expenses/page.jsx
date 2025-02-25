"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/utils/dbConfig";
import * as schema from "@/utils/schema";
import { desc, eq } from "drizzle-orm";
import { useUser } from "@clerk/nextjs";
import ExpenseListTable from "./_components/ExpenseListTable";

function ExpensesScreen() {
  const [expensesList, setExpensesList] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    if (user) getAllExpenses();
  }, [user]);

  const getAllExpenses = async () => {
    const result = await db
      .select({
        id: schema.Expenses.id,
        amount: schema.Expenses.amount,
        createdAt: schema.Expenses.createdAt, // Ensure this field exists
      })
      .from(schema.Budgets)
      .rightJoin(
        schema.Expenses,
        eq(schema.Budgets.id, schema.Expenses.budgetId) // Ensure correct relationship (budgetId)
      )
      .where(eq(schema.Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
      .orderBy(desc(schema.Expenses.id));

    setExpensesList(result);
  };

  return (
    <div className="p-10">
      <h2 className="font-bold text-3xl">My Expenses</h2>
      <ExpenseListTable refreshData={() => getAllExpenses()} expensesList={expensesList} />
    </div>
  );
}

export default ExpensesScreen;
