import { getSupabase } from './supabase.js';

export const getShoppingItems = () => {
  const supabase = getSupabase();

  return supabase.from('shopping_item').select('*').order('created_at');
};

export const getShoppingItemById = (id) => {
  const supabase = getSupabase();

  return supabase.from('shopping_item').select('*').eq('id', id).single();
};

export const addShoppingItem = (product, amount, unit) => {
  const supabase = getSupabase();

  return supabase.from('shopping_item').insert({
    product: product,
    amount: amount,
    unit: unit,
    done: false,
  });
};

export const updateShoppingItem = (id, done) => {
  const supabase = getSupabase();

  return supabase
    .from('shopping_item')
    .update({
      done: done,
    })
    .eq('id', id);
};
