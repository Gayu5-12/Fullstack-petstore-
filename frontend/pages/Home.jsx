import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

  :root {
    --clay:      #C97B63;
    --clay-dark: #9E5A46;
    --clay-pale: #F5E6DE;
    --sand:      #F9F2EA;
    --biscuit:   #EDD8C8;
    --ink:       #2B1F1A;
    --muted:     #7A6258;
    --white:     #FFFFFF;
    --radius-lg: 28px;
    --radius-pill: 50px;
    --shadow-card: 0 8px 40px rgba(43,31,26,0.10);
    --shadow-btn:  0 10px 30px rgba(201,123,99,0.35);
    --ff-display: 'Playfair Display', serif;
    --ff-body:    'DM Sans', sans-serif;
    --transition: 0.35s cubic-bezier(0.25,0.8,0.25,1);
  }

  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; }

  body {
    font-family: var(--ff-body);
    background: var(--sand);
    color: var(--ink);
    margin: 0; padding: 0;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: var(--sand); }
  ::-webkit-scrollbar-thumb { background: var(--clay); border-radius: 99px; }

  .nav-wrap {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    padding: 0;
    width: 100%;
    transition: background var(--transition), box-shadow var(--transition);
  }
  .nav-wrap.scrolled {
    background: rgba(249,242,234,0.96);
    backdrop-filter: blur(12px);
    box-shadow: 0 2px 20px rgba(43,31,26,0.08);
  }
  .nav-inner {
    width: 100%;
    max-width: 2280px;
    margin: 0 auto;
    padding: 18px 40px;
    display: flex; align-items: center; justify-content: space-between; gap: 20px;
  }
  .nav-brand {
    font-family: var(--ff-display);
    font-size: 24px; font-weight: 900;
    color: var(--clay-dark);
    text-decoration: none;
    display: flex; align-items: center; gap: 8px;
  }
  .nav-links {
    display: flex; align-items: center; gap: 6px;
    list-style: none; margin: 0; padding: 0;
  }
  .nav-links a {
    font-size: 14px; font-weight: 500;
    color: var(--muted);
    text-decoration: none;
    padding: 7px 14px;
    border-radius: var(--radius-pill);
    transition: color var(--transition), background var(--transition);
  }
  .nav-links a:hover, .nav-links a.active {
    color: var(--clay-dark);
    background: var(--biscuit);
  }
  .btn-nav-cta {
    background: var(--clay) !important;
    color: var(--white) !important;
    padding: 9px 22px !important;
    border-radius: var(--radius-pill) !important;
    font-weight: 600 !important;
    text-decoration: none;
    display: inline-block;
    transition: background var(--transition), box-shadow var(--transition), transform var(--transition) !important;
  }
  .btn-nav-cta:hover {
    background: var(--clay-dark) !important;
    box-shadow: var(--shadow-btn);
    transform: translateY(-2px);
  }
  .auth-zone { display: flex; align-items: center; gap: 10px; }

  .hamburger {
    display: none;
    background: none; border: none; cursor: pointer;
    flex-direction: column; gap: 5px; padding: 4px;
  }
  .hamburger span {
    display: block; width: 22px; height: 2px;
    background: var(--clay-dark);
    border-radius: 2px;
    transition: var(--transition);
  }
  .mobile-menu {
    display: none;
    flex-direction: column;
    background: rgba(249,242,234,0.98);
    backdrop-filter: blur(12px);
    padding: 20px 30px 30px;
    gap: 4px;
    border-top: 1px solid var(--biscuit);
  }
  .mobile-menu.open { display: flex; }
  .mobile-menu a {
    font-size: 15px; font-weight: 500;
    color: var(--muted); text-decoration: none;
    padding: 10px 0;
    border-bottom: 1px solid var(--biscuit);
    transition: color var(--transition);
  }
  .mobile-menu a:hover { color: var(--clay-dark); }

  .hero {
    min-height: 100vh;
    background: var(--clay-pale);
    display: flex; align-items: center;
    position: relative;
    overflow: hidden;
    padding: 140px 40px 80px;
  }
  .hero::before {
    content: '';
    position: absolute; inset: 0; z-index: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    opacity: 0.5; pointer-events: none;
  }
  .hero-ring {
    position: absolute;
    border: 1.5px solid rgba(201,123,99,0.18);
    border-radius: 50%;
    pointer-events: none;
  }
  .hero-ring-1 { width: 600px; height: 600px; bottom: -200px; right: -100px; }
  .hero-ring-2 { width: 400px; height: 400px; bottom: -80px; right: 60px; }
  .hero-ring-3 { width: 200px; height: 200px; bottom: 60px; right: 230px; }
  .hero-inner {
    max-width: 1280px;
    margin: 0 auto; width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 60px;
    position: relative; z-index: 1;
  }
  .hero-label {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--white);
    border: 1px solid var(--biscuit);
    padding: 6px 16px;
    border-radius: var(--radius-pill);
    font-size: 12px; font-weight: 600;
    letter-spacing: 0.08em; text-transform: uppercase;
    color: var(--clay-dark);
    margin-bottom: 28px;
    opacity: 0;
    animation: fadeUp 0.8s 0.2s ease forwards;
  }
  .hero-label-dot { width: 7px; height: 7px; background: var(--clay); border-radius: 50%; animation: pulse 1.6s infinite; }
  .hero-headline {
    font-family: var(--ff-display);
    font-size: clamp(44px, 5.5vw, 76px);
    font-weight: 900;
    line-height: 1.08;
    color: var(--ink);
    margin-bottom: 26px;
    opacity: 0;
    animation: fadeUp 0.9s 0.35s ease forwards;
  }
  .hero-headline em { font-style: italic; color: var(--clay); }
  .hero-sub {
    font-size: 17px; font-weight: 400;
    color: var(--muted);
    line-height: 1.75;
    max-width: 440px;
    margin-bottom: 42px;
    opacity: 0;
    animation: fadeUp 0.9s 0.5s ease forwards;
  }
  .hero-actions {
    display: flex; gap: 14px; flex-wrap: wrap;
    opacity: 0;
    animation: fadeUp 0.9s 0.65s ease forwards;
  }
  .btn-primary-hero {
    background: var(--clay);
    color: var(--white);
    padding: 16px 38px;
    border-radius: var(--radius-pill);
    font-size: 15px; font-weight: 600;
    text-decoration: none;
    border: none; cursor: pointer;
    display: inline-flex; align-items: center; gap: 10px;
    transition: background var(--transition), box-shadow var(--transition), transform var(--transition);
  }
  .btn-primary-hero:hover {
    background: var(--clay-dark);
    color: var(--white);
    box-shadow: var(--shadow-btn);
    transform: translateY(-3px);
  }
  .btn-outline-hero {
    background: transparent;
    color: var(--clay-dark);
    padding: 14px 36px;
    border-radius: var(--radius-pill);
    font-size: 15px; font-weight: 600;
    text-decoration: none;
    border: 1.5px solid var(--clay);
    display: inline-flex; align-items: center; gap: 10px;
    transition: all var(--transition);
  }
  .btn-outline-hero:hover {
    background: var(--clay);
    color: var(--white);
    transform: translateY(-3px);
  }
  .hero-stats {
    display: flex; gap: 36px;
    margin-top: 56px;
    opacity: 0;
    animation: fadeUp 0.9s 0.8s ease forwards;
  }
  .stat-num {
    font-family: var(--ff-display);
    font-size: 32px; font-weight: 900;
    color: var(--clay-dark);
    line-height: 1;
  }
  .stat-label {
    font-size: 12px; font-weight: 500;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-top: 4px;
  }
  .stat-div { width: 1px; background: var(--biscuit); }
  .hero-visual {
    position: relative;
    display: flex; justify-content: center; align-items: center;
    min-height: 540px;
    opacity: 0;
    animation: scaleIn 1s 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards;
  }
  .hero-blob-shape {
    position: absolute;
    width: 480px; height: 520px;
    background: linear-gradient(135deg, var(--clay) 0%, #E89B83 100%);
    border-radius: 38% 62% 55% 45% / 48% 52% 48% 52%;
    z-index: 0;
    animation: morphBlob 8s ease-in-out infinite;
  }
  .hero-blob-accent {
    position: absolute;
    width: 500px; height: 530px;
    background: var(--biscuit);
    border-radius: 52% 48% 42% 58% / 53% 47% 53% 47%;
    z-index: -1;
    top: 20px; left: 20px;
    animation: morphBlob2 10s ease-in-out infinite;
  }
  .hero-main-img {
    position: relative; z-index: 2;
    width: 400px; height: 430px;
    object-fit: cover;
    border-radius: 38% 62% 55% 45% / 48% 52% 48% 52%;
    animation: morphBlob 8s ease-in-out infinite;
    transition: transform 0.5s ease;
  }
  .hero-visual:hover .hero-main-img { transform: scale(1.02); }
  .float-card {
    position: absolute;
    background: var(--white);
    border-radius: 18px;
    padding: 12px 18px;
    box-shadow: 0 10px 40px rgba(43,31,26,0.12);
    z-index: 3;
    display: flex; align-items: center; gap: 10px;
  }
  .float-card-1 { bottom: 50px; left: -30px; animation: floatY 4s ease-in-out infinite; }
  .float-card-2 { top: 60px; right: -20px; animation: floatY 4.5s ease-in-out infinite reverse; }
  .float-icon { font-size: 24px; }
  .float-text-main { font-size: 14px; font-weight: 700; color: var(--ink); }
  .float-text-sub { font-size: 11px; color: var(--muted); }

  .trust-bar {
    background: var(--white);
    padding: 22px 40px;
    border-bottom: 1px solid var(--biscuit);
  }
  .trust-inner {
    max-width: 1280px; margin: 0 auto;
    display: flex; align-items: center; justify-content: center;
    gap: 50px; flex-wrap: wrap;
  }
  .trust-item {
    display: flex; align-items: center; gap: 10px;
    color: var(--muted); font-size: 14px; font-weight: 500;
  }
  .trust-item i { color: var(--clay); font-size: 18px; }

  .section-tag {
    display: inline-block;
    font-size: 11px; font-weight: 700;
    letter-spacing: 0.12em; text-transform: uppercase;
    color: var(--clay);
    background: rgba(201,123,99,0.1);
    padding: 5px 14px; border-radius: var(--radius-pill);
    margin-bottom: 14px;
  }
  .section-title {
    font-family: var(--ff-display);
    font-size: clamp(30px, 3.5vw, 48px);
    font-weight: 900;
    color: var(--ink); line-height: 1.15;
    margin-bottom: 16px;
  }
  .section-sub {
    font-size: 16px; color: var(--muted);
    line-height: 1.7; max-width: 540px;
  }

  .services { padding: 100px 40px; background: var(--sand); }
  .services-inner { max-width: 1280px; margin: 0 auto; }
  .services-head {
    display: flex; justify-content: space-between; align-items: flex-end;
    flex-wrap: wrap; gap: 20px;
    margin-bottom: 60px;
  }
  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  .svc-card {
    background: var(--white);
    border-radius: var(--radius-lg);
    padding: 36px 30px;
    transition: transform var(--transition), box-shadow var(--transition);
    cursor: default;
    position: relative; overflow: hidden;
  }
  .svc-card::after {
    content: '';
    position: absolute; bottom: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--clay), var(--biscuit));
    transform: scaleX(0); transform-origin: left;
    transition: transform var(--transition);
  }
  .svc-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-card); }
  .svc-card:hover::after { transform: scaleX(1); }
  .svc-icon {
    width: 54px; height: 54px;
    background: var(--clay-pale);
    border-radius: 16px;
    display: flex; align-items: center; justify-content: center;
    font-size: 24px;
    margin-bottom: 22px;
    transition: background var(--transition);
  }
  .svc-card:hover .svc-icon { background: var(--clay); }
  .svc-name {
    font-family: var(--ff-display);
    font-size: 20px; font-weight: 700;
    color: var(--ink); margin-bottom: 10px;
  }
  .svc-desc { font-size: 14px; color: var(--muted); line-height: 1.65; }

  .adopt-banner {
    margin: 0 40px;
    border-radius: 36px;
    background: linear-gradient(130deg, var(--clay-dark) 0%, var(--clay) 50%, #E8A48E 100%);
    padding: 80px 70px;
    display: flex; align-items: center; justify-content: space-between;
    gap: 40px; flex-wrap: wrap;
    position: relative; overflow: hidden;
  }
  .adopt-banner::before {
    content: '🐾';
    position: absolute;
    font-size: 260px;
    right: -30px; bottom: -60px;
    opacity: 0.07; pointer-events: none;
    line-height: 1;
  }
  .adopt-banner-text .section-title { color: var(--white); max-width: 500px; }
  .adopt-banner-text p { color: rgba(255,255,255,0.8); font-size: 16px; line-height: 1.7; max-width: 480px; margin-top: 14px; }
  .btn-banner-cta {
    background: var(--white);
    color: var(--clay-dark);
    padding: 16px 40px;
    border-radius: var(--radius-pill);
    font-size: 15px; font-weight: 700;
    text-decoration: none;
    white-space: nowrap;
    display: inline-flex; align-items: center; gap: 10px;
    transition: all var(--transition);
    flex-shrink: 0;
  }
  .btn-banner-cta:hover {
    background: var(--clay-pale);
    color: var(--clay-dark);
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.15);
  }

  .values { padding: 100px 40px; background: var(--white); }
  .values-inner { max-width: 1280px; margin: 0 auto; }
  .values-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-top: 60px;
  }
  .value-card {
    border-radius: var(--radius-lg);
    overflow: hidden;
    position: relative;
    min-height: 300px;
    display: flex; align-items: flex-end;
  }
  .value-card img {
    position: absolute; inset: 0;
    width: 100%; height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }
  .value-card:hover img { transform: scale(1.06); }
  .value-card-overlay {
    position: relative; z-index: 1;
    background: linear-gradient(0deg, rgba(43,31,26,0.75) 0%, transparent 100%);
    padding: 36px;
    width: 100%;
  }
  .value-card h3 {
    font-family: var(--ff-display);
    font-size: 26px; font-weight: 700;
    color: var(--white); margin-bottom: 8px;
  }
  .value-card p { color: rgba(255,255,255,0.8); font-size: 14px; line-height: 1.65; margin: 0; }
  .value-card.full { grid-column: 1 / -1; min-height: 260px; }

  .training { padding: 100px 40px; background: var(--clay-pale); }
  .training-inner {
    max-width: 1280px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 80px; align-items: center;
  }
  .training-img-wrap { position: relative; }
  .training-img {
    width: 100%; border-radius: var(--radius-lg);
    object-fit: cover; height: 480px;
    display: block;
  }
  .training-badge {
    position: absolute;
    bottom: -20px; right: -20px;
    background: var(--white);
    border-radius: 20px;
    padding: 18px 24px;
    box-shadow: var(--shadow-card);
    display: flex; align-items: center; gap: 12px;
  }
  .badge-icon { font-size: 30px; }
  .badge-text-big { font-family: var(--ff-display); font-size: 22px; font-weight: 900; color: var(--clay-dark); }
  .badge-text-small { font-size: 11px; color: var(--muted); text-transform: uppercase; letter-spacing: 0.06em; }
  .steps-list { margin-top: 40px; display: flex; flex-direction: column; gap: 22px; }
  .step-item { display: flex; gap: 18px; align-items: flex-start; }
  .step-num {
    width: 42px; height: 42px; flex-shrink: 0;
    background: var(--white);
    border: 1.5px solid var(--clay);
    border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    font-family: var(--ff-display);
    font-size: 17px; font-weight: 900;
    color: var(--clay-dark);
    transition: background var(--transition);
  }
  .step-item:hover .step-num { background: var(--clay); color: var(--white); border-color: var(--clay); }
  .step-body h5 { font-size: 16px; font-weight: 700; color: var(--ink); margin-bottom: 4px; }
  .step-body p { font-size: 14px; color: var(--muted); line-height: 1.6; margin: 0; }

  .testimonials { padding: 100px 40px; background: var(--sand); }
  .testi-inner { max-width: 1280px; margin: 0 auto; }
  .testi-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-top: 60px;
  }
  .testi-card {
    background: var(--white);
    border-radius: var(--radius-lg);
    padding: 34px 30px;
    transition: transform var(--transition), box-shadow var(--transition);
  }
  .testi-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-card); }
  .testi-stars { color: #F4A537; font-size: 14px; margin-bottom: 18px; letter-spacing: 2px; }
  .testi-quote { font-size: 15px; line-height: 1.7; color: var(--muted); margin-bottom: 24px; font-style: italic; }
  .testi-user { display: flex; align-items: center; gap: 12px; }
  .testi-avatar { width: 46px; height: 46px; border-radius: 50%; object-fit: cover; }
  .testi-name { font-size: 14px; font-weight: 700; color: var(--ink); }
  .testi-role { font-size: 12px; color: var(--muted); }

  .cta-strip { background: var(--ink); padding: 70px 40px; text-align: center; }
  .cta-strip h2 {
    font-family: var(--ff-display);
    font-size: clamp(28px,4vw,52px);
    color: var(--white);
    font-weight: 900;
    margin-bottom: 14px;
  }
  .cta-strip p { color: rgba(255,255,255,0.6); font-size: 16px; max-width: 500px; margin: 0 auto 36px; line-height: 1.7; }
  .btn-cta-strip {
    background: var(--clay);
    color: var(--white);
    padding: 16px 44px;
    border-radius: var(--radius-pill);
    font-size: 16px; font-weight: 700;
    text-decoration: none;
    display: inline-flex; align-items: center; gap: 10px;
    transition: all var(--transition);
  }
  .btn-cta-strip:hover {
    background: var(--clay-dark);
    color: var(--white);
    box-shadow: 0 12px 35px rgba(201,123,99,0.4);
    transform: translateY(-3px);
  }

  footer { background: #1C1410; color: #9E8C82; padding: 70px 40px 30px; }
  .footer-inner { max-width: 1280px; margin: 0 auto; }
  .footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.3fr;
    gap: 50px;
    padding-bottom: 50px;
    border-bottom: 1px solid rgba(255,255,255,0.07);
    margin-bottom: 30px;
  }
  .footer-brand-name { font-family: var(--ff-display); font-size: 22px; font-weight: 900; color: var(--white); margin-bottom: 14px; }
  .footer-brand-desc { font-size: 13px; line-height: 1.75; color: #7A6258; max-width: 260px; }
  .footer-social { display: flex; gap: 10px; margin-top: 22px; }
  .soc-btn {
    width: 36px; height: 36px;
    background: rgba(255,255,255,0.06);
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    color: #9E8C82; font-size: 14px;
    text-decoration: none;
    transition: all var(--transition);
  }
  .soc-btn:hover { background: var(--clay); color: var(--white); }
  .footer-col h6 { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--white); margin-bottom: 18px; }
  .footer-col ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
  .footer-col ul li a { font-size: 13px; color: #7A6258; text-decoration: none; transition: color var(--transition); }
  .footer-col ul li a:hover { color: var(--white); }
  .footer-contact-item { display: flex; gap: 10px; font-size: 13px; margin-bottom: 12px; }
  .footer-contact-item i { color: var(--clay); width: 16px; margin-top: 2px; }
  .footer-bottom { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; }
  .footer-bottom p { font-size: 12px; color: #4A3F38; margin: 0; }
  .footer-bottom a { color: #4A3F38; text-decoration: none; }
  .footer-bottom a:hover { color: var(--clay); }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.88); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes morphBlob {
    0%   { border-radius: 38% 62% 55% 45% / 48% 52% 48% 52%; }
    33%  { border-radius: 50% 50% 42% 58% / 55% 45% 55% 45%; }
    66%  { border-radius: 44% 56% 60% 40% / 40% 60% 40% 60%; }
    100% { border-radius: 38% 62% 55% 45% / 48% 52% 48% 52%; }
  }
  @keyframes morphBlob2 {
    0%   { border-radius: 52% 48% 42% 58% / 53% 47% 53% 47%; }
    50%  { border-radius: 45% 55% 56% 44% / 48% 52% 48% 52%; }
    100% { border-radius: 52% 48% 42% 58% / 53% 47% 53% 47%; }
  }
  @keyframes floatY {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(-12px); }
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: 0.5; transform: scale(0.8); }
  }

  .reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 1024px) {
    .services-grid { grid-template-columns: repeat(2,1fr); }
    .testi-grid { grid-template-columns: repeat(2,1fr); }
    .footer-grid { grid-template-columns: 1fr 1fr; }
    .training-inner { grid-template-columns: 1fr; gap: 40px; }
    .training-img { height: 320px; }
  }
  @media (max-width: 768px) {
    .nav-inner { padding: 16px 20px; }
    .nav-links, .auth-zone { display: none; }
    .hamburger { display: flex; }
    .hero { padding: 120px 20px 60px; }
    .hero-inner { grid-template-columns: 1fr; gap: 50px; }
    .hero-visual { min-height: 380px; }
    .hero-blob-shape, .hero-blob-accent { width: 320px; height: 340px; }
    .hero-main-img { width: 280px; height: 300px; }
    .services-grid { grid-template-columns: 1fr; }
    .values-grid { grid-template-columns: 1fr; }
    .value-card.full { grid-column: 1; }
    .testi-grid { grid-template-columns: 1fr; }
    .adopt-banner { margin: 0 20px; padding: 50px 30px; }
    .services, .values, .training, .testimonials { padding: 70px 20px; }
    .footer-grid { grid-template-columns: 1fr; gap: 30px; }
    .float-card-1 { left: 0; }
    .float-card-2 { right: 0; }
    .hero-stats { gap: 20px; }
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    color: inherit;
    text-decoration: none;
  }

  body {
    font-family: var(--ff-body);
    background: var(--sand);
    color: var(--ink);
    margin: 0; padding: 0;
    overflow-x: hidden;
  }
`;

function Home() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Inject styles
    const styleEl = document.createElement("style");
    styleEl.innerHTML = styles;
    document.head.appendChild(styleEl);

    // Load FA icons
    if (!document.querySelector('link[href*="font-awesome"]')) {
      const fa = document.createElement("link");
      fa.rel = "stylesheet";
      fa.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css";
      document.head.appendChild(fa);
    }

    // Load Bootstrap
    if (!document.querySelector('link[href*="bootstrap"]')) {
      const bs = document.createElement("link");
      bs.rel = "stylesheet";
      bs.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
      document.head.appendChild(bs);
    }

    // Auth state
    setIsLoggedIn(localStorage.getItem("loggedIn") === "true");
    setIsAdmin(localStorage.getItem("isAdmin") === "true");

    // Scroll listener
    const onScroll = () => setNavScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);

    // Scroll reveal
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            e.target.style.transitionDelay = i * 0.05 + "s";
            e.target.classList.add("visible");
            revealObserver.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      revealObserver.disconnect();
      document.head.removeChild(styleEl);
    };
  }, []);

  const handleAuthRedirect = (targetPage) => {
    if (localStorage.getItem("loggedIn") === "true") {
      navigate(targetPage);
    } else {
      alert("Please Sign In first to view this workspace!");
      localStorage.setItem("redirectTarget", targetPage);
      navigate("/auth-gateway");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <div>
      {/* ── NAV ── */}
      <div className={`nav-wrap${navScrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-brand">
            <span className="paw">🐾</span> Pet Paws
          </Link>
          <ul className="nav-links">
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/petcare">Pet Care</Link></li>
            <li><Link to="/medicine">Pet Medicine</Link></li>
            <li><Link to="/accessories">Accessories</Link></li>
            <li><Link to="/adopt">Adopt</Link></li>
            <li><Link to="/sell">Sell a Pet</Link></li>
          </ul>
          <div className="auth-zone">
            {isLoggedIn ? (
              <div className="dropdown">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  className="dropdown-toggle"
                  data-bs-toggle="dropdown"
                  style={{ width: 38, height: 38, cursor: "pointer", borderRadius: "50%", border: "2px solid var(--clay)" }}
                  alt="Profile"
                />
                <ul className="dropdown-menu dropdown-menu-end shadow-lg" style={{ borderRadius: 16, border: "none", padding: 8 }}>
                  <li><Link className="dropdown-item" to="/profile" style={{ borderRadius: 10 }}><i className="fa-solid fa-user me-2"></i>Profile Dashboard</Link></li>
                  {isAdmin && (
                    <li><Link className="dropdown-item text-danger" to="/admin" style={{ borderRadius: 10 }}><i className="fa-solid fa-gauge me-2"></i>Admin Panel</Link></li>
                  )}
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button className="dropdown-item" style={{ borderRadius: 10 }} onClick={handleLogout}>Logout</button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/auth-gateway" className="btn-nav-cta">Sign In</Link>
            )}
          </div>
          <button className="hamburger" onClick={() => setMenuOpen((o) => !o)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
        <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/petcare" onClick={() => setMenuOpen(false)}>Pet Care</Link>
          <Link to="/medicine" onClick={() => setMenuOpen(false)}>Pet Medicine</Link>
          <Link to="/accessories" onClick={() => setMenuOpen(false)}>Accessories</Link>
          <Link to="/adopt" onClick={() => setMenuOpen(false)}>Adopt</Link>
          <Link to="/sell" onClick={() => setMenuOpen(false)}>Sell a Pet</Link>
          <Link to="/auth-gateway" style={{ color: "var(--clay-dark)", fontWeight: 700, border: "none", marginTop: 8 }} onClick={() => setMenuOpen(false)}>Sign In</Link>
        </div>
      </div>

      {/* ── HERO ── */}
      <header className="hero">
        <div className="hero-ring hero-ring-1" />
        <div className="hero-ring hero-ring-2" />
        <div className="hero-ring hero-ring-3" />
        <div className="hero-inner">
          <div>
            <div className="hero-label">
              <span className="hero-label-dot" />
              Trusted Pet Care Platform
            </div>
            <h1 className="hero-headline">
              One More<br /><em>Friend,</em><br />Endless Joy.
            </h1>
            <p className="hero-sub">
              Connect with loving pets looking for a forever home. At Pet Paws, we make adoption, care, and happiness simple — for you and your furry companion.
            </p>
            <div className="hero-actions">
              <button className="btn-primary-hero" onClick={() => handleAuthRedirect("/adopt")}>
                Adopt a Pet <i className="fa-solid fa-arrow-right" />
              </button>
              <Link to="/about" className="btn-outline-hero">Learn More</Link>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-num">2.4K+</div>
                <div className="stat-label">Pets Adopted</div>
              </div>
              <div className="stat-div" />
              <div className="stat-item">
                <div className="stat-num">98%</div>
                <div className="stat-label">Happy Families</div>
              </div>
              <div className="stat-div" />
              <div className="stat-item">
                <div className="stat-num">150+</div>
                <div className="stat-label">Vets on Call</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-blob-accent" />
            <div className="hero-blob-shape" />
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-cat-and-dog-pets-in-real-pictures-wallpapers-image_2931404.jpg"
              alt="Happy pets"
              className="hero-main-img"
            />
            <div className="float-card float-card-1">
              <span className="float-icon">🐶</span>
              <div>
                <div className="float-text-main">New Arrivals</div>
                <div className="float-text-sub">12 pets this week</div>
              </div>
            </div>
            <div className="float-card float-card-2">
              <span className="float-icon">❤️</span>
              <div>
                <div className="float-text-main">Forever Homes</div>
                <div className="float-text-sub">2,400+ matches</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── TRUST BAR ── */}
      <div className="trust-bar">
        <div className="trust-inner">
          <div className="trust-item"><i className="fa-solid fa-shield-heart" /> Vet-Verified Pets</div>
          <div className="trust-item"><i className="fa-solid fa-stethoscope" /> 24/7 Vet Support</div>
          <div className="trust-item"><i className="fa-solid fa-house-chimney" /> Safe Home Adoption</div>
          <div className="trust-item"><i className="fa-solid fa-star" /> 4.9 / 5 Rating</div>
          <div className="trust-item"><i className="fa-solid fa-truck-fast" /> Same-Day Delivery</div>
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className="services">
        <div className="services-inner">
          <div className="services-head">
            <div>
              <div className="section-tag reveal">What We Offer</div>
              <h2 className="section-title reveal">Premium Care for<br />Every Pet</h2>
            </div>
            <p className="section-sub reveal" style={{ textAlign: "right" }}>
              Everything your pet needs — from health to happiness — in one trusted platform.
            </p>
          </div>
          <div className="services-grid">
            {[
              { emoji: "🩺", name: "Veterinary Care", desc: "Professional healthcare services and regular check-ups to keep your pets healthy, happy, and vaccinated year-round." },
              { emoji: "🐣", name: "Breeding Services", desc: "Safe, ethical, and responsible breeding support — matched with expert guidance every step of the way." },
              { emoji: "🦮", name: "Pet Walking", desc: "Certified walkers for daily exercise routines that keep your pets active, social, and full of energy." },
              { emoji: "✂️", name: "Pet Grooming", desc: "Bathing, trimming, nail care, and coat styling from certified groomers using premium, pet-safe products." },
              { emoji: "🏠", name: "Pet Sitting", desc: "Reliable, loving care when you're away. Your pets stay comfortable, safe, and stress-free at all times." },
              { emoji: "🎓", name: "Pet Training", desc: "Structured training programs for obedience, socialisation, and behaviour correction using positive reinforcement." },
            ].map((svc) => (
              <div className="svc-card reveal" key={svc.name}>
                <div className="svc-icon"><span className="svc-emoji">{svc.emoji}</span></div>
                <div className="svc-name">{svc.name}</div>
                <div className="svc-desc">{svc.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADOPT BANNER ── */}
      <div style={{ padding: "0 0 80px" }}>
        <div className="adopt-banner reveal">
          <div className="adopt-banner-text">
            <h2 className="section-title">Ready to Find Your<br />Forever Companion?</h2>
            <p>Hundreds of loving pets are waiting for a caring home. Browse our verified listings and start your adoption journey today — it takes just a few minutes.</p>
          </div>
          <button className="btn-banner-cta" onClick={() => handleAuthRedirect("/adopt")}>
            Browse Pets <i className="fa-solid fa-paw" />
          </button>
        </div>
      </div>

      {/* ── VALUES ── */}
      <section className="values">
        <div className="values-inner">
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 0" }}>
            <div className="section-tag reveal">Our Promise</div>
            <h2 className="section-title reveal">Built on Love,<br />Trust & Care</h2>
            <p className="section-sub reveal" style={{ margin: "0 auto" }}>
              Every interaction at Pet Paws is rooted in the belief that every animal deserves love, safety, and a place to call home.
            </p>
          </div>
          <div className="values-grid" style={{ marginTop: 50 }}>
            <div className="value-card reveal">
              <img src="https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=800&q=80" alt="Companionship" />
              <div className="value-card-overlay">
                <h3>Companionship</h3>
                <p>Pets bring love, comfort, and unmatched joy into everyday life — becoming loyal friends who create lifelong memories.</p>
              </div>
            </div>
            <div className="value-card reveal">
              <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80" alt="Trust" />
              <div className="value-card-overlay">
                <h3>Trust & Reliability</h3>
                <p>We deliver transparent, dependable services that pet owners count on — because your pet's safety is our top priority.</p>
              </div>
            </div>
            <div className="value-card full reveal">
              <img src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1200&q=80" alt="Happy Pets" />
              <div className="value-card-overlay">
                <h3>Happy & Healthy Lives</h3>
                <p>From nutrition to exercise, grooming to emotional wellbeing — we support every aspect of your pet's flourishing life.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRAINING ── */}
      <section className="training">
        <div className="training-inner">
          <div className="training-img-wrap reveal">
            <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80" alt="Pet Training" className="training-img" />
            <div className="training-badge">
              <span className="badge-icon">🏅</span>
              <div>
                <div className="badge-text-big">5-Step</div>
                <div className="badge-text-small">Training System</div>
              </div>
            </div>
          </div>
          <div>
            <div className="section-tag reveal">Training Program</div>
            <h2 className="section-title reveal">Transform Your Pet's<br />Behaviour</h2>
            <p className="section-sub reveal">Our expert trainers use proven, reward-based techniques to build confidence, obedience, and a lifelong bond.</p>
            <div className="steps-list">
              {[
                { n: 1, title: "Consultation & Assessment", desc: "Our experts analyse your pet's behaviour, routine, and specific needs to create a personalised plan." },
                { n: 2, title: "Basic Obedience Training", desc: "Teach essentials like sit, stay, come, and proper manners in a calm, structured environment." },
                { n: 3, title: "Advanced Skill & Behaviour Modification", desc: "Address barking, jumping, or aggression with balanced, safety-first behaviour solutions." },
                { n: 4, title: "Socialisation Sessions", desc: "Help your pet interact comfortably with people and other animals, reducing fear and building confidence." },
                { n: 5, title: "Positive Reinforcement & Long-term Bonding", desc: "Reward-based techniques that make learning enjoyable and cement a lasting, loving relationship." },
              ].map((step) => (
                <div className="step-item reveal" key={step.n}>
                  <div className="step-num">{step.n}</div>
                  <div className="step-body">
                    <h5>{step.title}</h5>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials">
        <div className="testi-inner">
          <div style={{ textAlign: "center" }}>
            <div className="section-tag reveal">Real Stories</div>
            <h2 className="section-title reveal">Families Who Found<br />Their Perfect Match</h2>
          </div>
          <div className="testi-grid">
            {[
              { quote: "Max came to us shy and uncertain — today he is the most joyful, energetic companion I could have asked for. Pet Paws made the whole journey seamless.", name: "Priya Sharma", role: "Adopted Max, Golden Retriever", img: "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=200&q=80" },
              { quote: "Bella grew from a timid puppy into a playful, confident dog, thanks to the grooming and training team. Every visit felt like family. 10/10 recommend.", name: "Ananya Reddy", role: "Adopted Bella, Labrador", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80" },
              { quote: "The vet support and online medicine delivery saved us during an emergency. Pet Paws is the only platform I trust for everything related to our cat, Mochi.", name: "Karthik Nair", role: "Pet Owner, Persian Cat", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" },
            ].map((t) => (
              <div className="testi-card reveal" key={t.name}>
                <div className="testi-stars">★★★★★</div>
                <p className="testi-quote">"{t.quote}"</p>
                <div className="testi-user">
                  <img src={t.img} alt={t.name} className="testi-avatar" />
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <div className="cta-strip reveal">
        <h2>Your Pet's Best Life Starts Here</h2>
        <p>Join thousands of happy pet owners who trust Pet Paws for adoption, care, and lifelong support.</p>
        <Link to="/auth-gateway" className="btn-cta-strip">
          Get Started Free <i className="fa-solid fa-arrow-right" />
        </Link>
      </div>

      {/* ── FOOTER ── */}
      <footer>
        <div className="footer-inner">
          <div className="footer-grid">
            <div>
              <div className="footer-brand-name">🐾 Pet Paws</div>
              <p className="footer-brand-desc">Bringing premium pet adoption, verified health tracking, clinical medicine access, and safe home workflows to pet parents everywhere.</p>
              <div className="footer-social">
  <a href="https://instagram.com" className="soc-btn" target="_blank" rel="noreferrer">
    <i className="fa-brands fa-instagram" />
  </a>

  <a href="https://facebook.com" className="soc-btn" target="_blank" rel="noreferrer">
    <i className="fa-brands fa-facebook" />
  </a>

  <a href="https://youtube.com" className="soc-btn" target="_blank" rel="noreferrer">
    <i className="fa-brands fa-youtube" />
  </a>
</div>
            </div>
            <div className="footer-col">
              <h6>Navigation</h6>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/adopt">Adopt</Link></li>
                <li><Link to="/sell">Sell a Pet</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h6>Resources</h6>
              <ul>
                <li><Link to="/petcare">Pet Care</Link></li>
                <li><Link to="/medicine">Pet Medicine</Link></li>
                <li><Link to="/accessories">Accessories</Link></li>
                <li><Link to="/faq">FAQs</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms & Conditions</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h6>Contact</h6>
              <div className="footer-contact-item"><i className="fa-solid fa-location-dot" /><span>123 Pet Street, Paw City</span></div>
              <div className="footer-contact-item"><i className="fa-solid fa-phone" /><span>+91 98765 43210</span></div>
              <div className="footer-contact-item"><i className="fa-solid fa-envelope" /><span>support@petpaws.com</span></div>
              <div className="footer-contact-item"><i className="fa-solid fa-clock" /><span>Mon–Sat, 9AM – 7PM</span></div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Pet Paws Ecosystem. All Rights Reserved.</p>
            <div style={{ display: "flex", gap: 16 }}>
              {/*<Link to="/privacy">Privacy</Link>
              <Link to="/terms">Terms</Link>
              <Link to="/faq">FAQ</Link> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;