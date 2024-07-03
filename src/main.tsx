import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/global.ts'
import AppRoutes from './routes/AppRoutes.tsx'
import { register } from 'swiper/element/bundle'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

register();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoutes />
    <GlobalStyle />
  </React.StrictMode>,
)
