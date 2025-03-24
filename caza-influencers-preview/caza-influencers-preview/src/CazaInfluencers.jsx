// CazaInfluencers Mejorado - Comparador, Impacto, Visualizaciones y Sugerencias
import { useState, useEffect } from 'react';
import { Search, Star, TrendingUp, MapPin, Film, BarChart2, Heart, MessageCircle, Users, Plus, X } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

const fullData = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  username: `usuario${i + 1}`,
  name: `Nombre ${i + 1}`,
  category: ["Drama", "Acción", "Ciencia Ficción", "Comedia", "Aventura", "Reddit", "Facebook"][i % 7],
  platform: ["Instagram", "Reddit", "Facebook"][i % 3],
  followers: 50000 + (i * 2500),
  engagement: (3 + (i % 5) * 0.5).toFixed(1),
  location: "Barcelona",
  niche: ["cine", "series", "eventos", "comunidad", "crítica"].slice(0, (i % 5) + 1),
  profileImage: `https://randomuser.me/api/portraits/lego/${i % 10}.jpg`,
  likesAvg: 1000 + (i * 50),
  commentsAvg: 100 + (i * 3),
  report: {
    campañas: [
      {
        titulo: `Campaña #${i + 1}`,
        año: 2023,
        resultado: "+20% alcance",
        mensaje: "Gran afinidad con el público objetivo"
      }
    ]
  }
}));

// (el resto del código sigue...)
