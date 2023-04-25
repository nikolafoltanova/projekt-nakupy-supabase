import { getSupabase } from './supabase.js';

export const getShoppingItems = () => {
  const supabase = getSupabase();

  return supabase.from('shopping_items').select('*').order('created_at');
};

export const getShoppingItemById = (id) => {
  const supabase = getSupabase();

  return supabase.from('shopping_items').select('*').eq('id', id).single();
};

export const addShoppingItem = (product, amount, unit) => {
  const supabase = getSupabase();

  return supabase.from('shopping_items').insert({
    product: product,
    amount: amount,
    unit: unit,
    done: false,
  });
};

export const updateShoppingItem = (id, done) => {
  const supabase = getSupabase();

  return supabase
    .from('shopping_items')
    .update({
      done: done,
    })
    .eq('id', id);
};
