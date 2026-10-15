import React, { createContext, useContext, useState, useEffect } from 'react';

const RFQContext = createContext();

export const RFQProvider = ({ children }) => {
  const [rfqItems, setRfqItems] = useState(() => {
    try {
      const saved = localStorage.getItem('regal_rfq_items');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('regal_rfq_items', JSON.stringify(rfqItems));
    } catch (e) {
      console.error("Storage error", e);
    }
  }, [rfqItems]);

  const addToRFQ = (product, customNote = '') => {
    setRfqItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1, note: customNote || item.note }
            : item
        );
      }
      return [...prev, {
        id: product.id,
        name: product.name,
        category: product.category,
        image: product.image,
        badge: product.badge,
        quantity: 1,
        note: customNote || ''
      }];
    });
    setIsDrawerOpen(true);
  };

  const removeFromRFQ = (productId) => {
    setRfqItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, qty) => {
    if (qty <= 0) {
      removeFromRFQ(productId);
      return;
    }
    setRfqItems(prev =>
      prev.map(item => item.id === productId ? { ...item, quantity: qty } : item)
    );
  };

  const updateItemNote = (productId, note) => {
    setRfqItems(prev =>
      prev.map(item => item.id === productId ? { ...item, note } : item)
    );
  };

  const clearRFQ = () => {
    setRfqItems([]);
  };

  const openProductModal = (product) => {
    setSelectedProductForModal(product);
  };

  const closeProductModal = () => {
    setSelectedProductForModal(null);
  };

  return (
    <RFQContext.Provider
      value={{
        rfqItems,
        addToRFQ,
        removeFromRFQ,
        updateQuantity,
        updateItemNote,
        clearRFQ,
        isDrawerOpen,
        setIsDrawerOpen,
        selectedProductForModal,
        openProductModal,
        closeProductModal
      }}
    >
      {children}
    </RFQContext.Provider>
  );
};

export const useRFQ = () => useContext(RFQContext);
