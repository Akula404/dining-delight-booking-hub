
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase, type MenuItem } from '@/lib/supabase';
import { useToast } from './use-toast';

export function useMenu() {
  const { toast } = useToast();
  
  const fetchMenuItems = async (): Promise<Record<string, MenuItem[]>> => {
    if (!supabase) {
      toast({
        title: 'Supabase Connection Error',
        description: 'Please connect to Supabase through the Lovable interface.',
        variant: 'destructive',
      });
      return {}; // Return empty object if supabase client is not available
    }
    
    const { data, error } = await supabase
      .from('menu_items')
      .select('*')
      .order('id');
    
    if (error) {
      toast({
        title: 'Error loading menu',
        description: error.message,
        variant: 'destructive',
      });
      throw error;
    }
    
    // Group by category
    const groupedItems = data.reduce((acc: Record<string, MenuItem[]>, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push({
        ...item,
        tags: item.tags || [],
      });
      return acc;
    }, {});
    
    return groupedItems;
  };
  
  return useQuery({
    queryKey: ['menu'],
    queryFn: fetchMenuItems,
  });
}
