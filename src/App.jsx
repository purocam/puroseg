import { useState } from 'react'
import './App.css'
import React from 'react';
import Paper from '@mui/material/Paper'

export default function App() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-slate-100/80 backdrop-blur-lg border-b border-emerald-700/40">
        <div className="w-full flex justify-between items-center py-2 pl-5 pr-5">
          <img className="ml-5 h-15" src="/LogoPuro.svg" />
          <nav className="hidden md:flex items-center space-x-10">
            <a className="text-sm font-semibold text-slate-900/70 hover:text-emerald-700 transition-colors uppercase tracking-widest" href="#documents">Documentos</a>
            <a className="text-sm font-semibold text-slate-900/70 hover:text-emerald-700 transition-colors uppercase tracking-widest" href="#training">Treinamentos</a>
            <a className="text-sm font-semibold text-slate-900/70 hover:text-emerald-700 transition-colors uppercase tracking-widest" href="#about">Sobre</a>
            <a className="text-sm font-semibold text-slate-900/70 hover:text-emerald-700 transition-colors uppercase tracking-widest" href="#contact">Contato</a>
          </nav>
          {/* <button className="mr-5 bg-emerald-700 text-white px-6 py-2.5 text-xs font-bold tracking-widest uppercase hover:bg-emerald-600 transition-all rounded-sm">
            Falar com Especialista
          </button> */}
        </div>
      </header>

      <main>
        <section className="relative min-h-screen flex items-center pt-5 overflow-hidden bg-slate-100">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover opacity-60" src="/Fundo.jpg" />
            {/* LEFT → RIGHT fade */}
            <div className="absolute inset-0 bg-linear-to-r from-slate-100 via-slate-100/90 to-transparent"></div>
          </div>
          
          <div className="absolute top-20 left-5 z-20">
            <span className="inline-flex items-center gap-2 py-0 px-2 bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-700 animate-pulse"></span>
              Excelência e Segurança
            </span>
          </div>

          <div className="w-full relative z-10">
            <div className="ml-5 max-w-3xl">
              <h1 className="text-slate-900 text-left font-bold text-5xl md:text-8xl  tracking-tighter mb-10">
                Especialista em Segurança do Trabalho: Assessoria e Treinamentos
              </h1>
              <div className="flex flex-wrap gap-5">
                <button className="bg-emerald-700 text-white px-8 py-3 rounded-lg text-sm font-bold tracking-widest uppercase hover:bg-emerald-600 hover:translate-y-[-0.5] transition-all shadow-lg shadow-neutral-900/50">
                  Nossos serviços
                </button>
                <button className="border-2 border-emerald-700/20 text-emerald-700 rounded-lg px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-emerald-100 transition-all shadow-lg shadow-neutral-900/50">
                  Sobre nós
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 w-full h-32 bg-linear-to-b from-transparent to-slate-100 pointer-events-none"></div>
        </section>

        <section className="py-15 bg-slate-100" id="documents">
          <div className="w-full ml-5">
            <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-10">
              <div className="max-w-2xl">
                <h2 className="border-l-4 px-1 border-emerald-700 text-3xl md:text-4xl text-start text-slate-900 uppercase tracking-tight leading-tight font-extrabold">
                  Documentação Técnica & Legal
                </h2>
                <p className="border-l-4 px-1 border-emerald-700 text-slate-600 text-start text-xl leading-relaxed">
                  Soluções rigorosas para conformidade normativa e gestão de riscos ocupacionais com precisão técnica e jurídica.
                </p>
              </div>
              <div className="flex gap-4 self-end">
                <button className="w-14 h-14 rounded-full border-2 border-emerald-700/10 flex items-center justify-center text-emerald-700 hover:bg-emerald-700 hover:text-white transition-all">
                  <span className="material-symbols-outlined">west</span>
                </button>
                <button className="w-14 h-14 rounded-full border-2 border-emerald-700/10 flex items-center justify-center text-emerald-700 hover:bg-emerald-700 hover:text-white transition-all">
                  <span className="material-symbols-outlined">east</span>
                </button>
              </div>
            </div>
            
            <div className="flex overflow-x-auto pb-16 gap-8 custom-scrollbar snap-x">
              <div className="min-w-85 md:min-w-105 bg-white p-12 snap-start editorial-shadow rounded-xl hover:translate-y-2 transition-all duration-300 border-t-8 border-emerald-700">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 flex items-center justify-center rounded-xl mb-8">
                  <span className="material-symbols-outlined text-3xl">description</span>
                </div>
                <h3 className="font-extrabold text-2xl mb-4 text-slate-900">PGR, PGRTR & PCMSO</h3>
                <p className="text-slate-600 text-base leading-relaxed mb-10">
                  Elaboração integral de programas de gerenciamento de riscos conforme as novas diretrizes da NR 01 e 31.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-600 bg-emerald-100 px-3 py-1 rounded">Conformidade Legal</span>
                  <span className="material-symbols-outlined text-emerald-700/30">arrow_outward</span>
                </div>
              </div>

              <div className="min-w-85 md:min-w-105 bg-white p-12 snap-start editorial-shadow rounded-xl hover:translate-y-2 transition-all duration-300 border-t-8 border-emerald-600">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 flex items-center justify-center rounded-xl mb-8">
                  <span className="material-symbols-outlined text-3xl">medical_services</span>
                </div>
                <h3 className="font-extrabold text-2xl mb-4 text-slate-900">Laudos Técnicos</h3>
                <p className="text-slate-600 text-base leading-relaxed mb-10">
                  Análise técnica detalhada para laudos de insalubridade e periculosidade com fundamentação jurídica.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-600 bg-emerald-100 px-3 py-1 rounded">Engenharia</span>
                  <span className="material-symbols-outlined text-emerald-700/30">arrow_outward</span>
                </div>
              </div>

              <div className="min-w-85 md:min-w-105 bg-white p-12 snap-start editorial-shadow rounded-xl hover:translate-y-2 transition-all duration-300 border-t-8 border-emerald-700">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 flex items-center justify-center rounded-xl mb-8">
                  <span className="material-symbols-outlined text-3xl">cloud_upload</span>
                </div>
                <h3 className="font-extrabold text-2xl mb-4 text-slate-900">Gestão eSocial</h3>
                <p className="text-slate-600 text-base leading-relaxed mb-10">
                  Envio e monitoramento dos eventos de SST (S-2210, S-2220 e S-2240) garantindo a integridade dos dados.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-600 bg-emerald-100 px-3 py-1 rounded">Digital</span>
                  <span className="material-symbols-outlined text-emerald-700/30">arrow_outward</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative h-150 flex items-center">
          <div className="absolute inset-0">
            <img alt="Team Training" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq9-iahKnSo3dGWL1BS8mqXUAJeyoMci5UTrxX03ZzCR--jL5SDJ2Ziv07cvQfausaypHpXxPogd8ww2IJZSuzsdNNfKvpL4BJ76CmDEvza8wZVMZxXZTsv6T-2jJDiI3XYXzwi3dO8z30p0xo26xdOP2dMsCZWJcu_C2DeAj9IX0oZ0oxeVTg-TAXvDTd-m_nuCGLg1nUlN-GpwEmqbrEH3uq-L4MBL49QrGWJLnta1uhAPIOWVRd83hCxWtxwOiEBBZ0gNWdjxo" />
            <div className="absolute inset-0 bg-emerald-700/40 mix-blend-multiply"></div>
          </div>
          <div className="w-full relative z-10 text-white">
            <div className="max-w-2xl bg-white/10 backdrop-blur-md p-12 border border-white/20">
              <h3 className="font-black text-4xl mb-6">Educação que salva vidas</h3>
              <p className="text-xl leading-relaxed text-white/90">
                Nossa metodologia de treinamento vai além da teoria, focando no comportamento seguro e na prevenção proativa de acidentes.
              </p>
            </div>
          </div>
        </section>

        <section className="py-32 bg-emerald-100/30" id="training">
          <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
              <div className="lg:col-span-7">
                <h2 className="font-black text-4xl md:text-6xl text-slate-900 uppercase tracking-tight mb-8">
                  Treinamentos & <span className="text-emerald-700">Capacitação</span>
                </h2>
              </div>
              <div className="lg:col-span-5 flex items-center">
                <p className="text-slate-600 text-xl leading-relaxed italic border-l-4 border-emerald-700 pl-6">
                  Desenvolvemos competências críticas para garantir que sua equipe atue com segurança, responsabilidade e excelência operacional.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="group relative bg-white overflow-hidden p-8 flex gap-8 items-start rounded-2xl editorial-shadow">
                <span className="text-6xl font-black text-emerald-100 group-hover:text-emerald-700/10 transition-colors">01</span>
                <div>
                  <h4 className="font-bold text-2xl mb-4">Certificações NRs</h4>
                  <p className="text-slate-600 mb-6 leading-relaxed">Formação completa em NR 5 (CIPA), NR 6 (EPI), NR 10 (Elétrica) e demais normas vigentes com material didático exclusivo.</p>
                  <a className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-emerald-700 group-hover:translate-x-2 transition-transform" href="#">
                    Ver Detalhes <span className="material-symbols-outlined text-sm">trending_flat</span>
                  </a>
                </div>
              </div>
              
              <div className="group relative bg-white overflow-hidden p-8 flex gap-8 items-start rounded-2xl editorial-shadow">
                <span className="text-6xl font-black text-emerald-100 group-hover:text-emerald-700/10 transition-colors">02</span>
                <div>
                  <h4 className="font-bold text-2xl mb-4">Equipamentos</h4>
                  <p className="text-slate-600 mb-6 leading-relaxed">Capacitação teórica e prática para operadores de máquinas pesadas e equipamentos industriais em ambiente controlado.</p>
                  <a className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-emerald-700 group-hover:translate-x-2 transition-transform" href="#">
                    Ver Detalhes <span className="material-symbols-outlined text-sm">trending_flat</span>
                  </a>
                </div>
              </div>

              <div className="group relative bg-white overflow-hidden p-8 flex gap-8 items-start rounded-2xl editorial-shadow">
                <span className="text-6xl font-black text-emerald-100 group-hover:text-emerald-700/10 transition-colors">03</span>
                <div>
                  <h4 className="font-bold text-2xl mb-4">Gestão Jurídica</h4>
                  <p className="text-slate-600 mb-6 leading-relaxed">Workshop sobre Responsabilidade Civil e Criminal aplicada à Segurança do Trabalho para gestores e diretores.</p>
                  <a className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-emerald-700 group-hover:translate-x-2 transition-transform" href="#">
                    Ver Detalhes <span className="material-symbols-outlined text-sm">trending_flat</span>
                  </a>
                </div>
              </div>

              <div className="group relative bg-white overflow-hidden p-8 flex gap-8 items-start rounded-2xl editorial-shadow">
                <span className="text-6xl font-black text-emerald-100 group-hover:text-emerald-700/10 transition-colors">04</span>
                <div>
                  <h4 className="font-bold text-2xl mb-4">Brigada de Incêndio</h4>
                  <p className="text-slate-600 mb-6 leading-relaxed">Treinamento intensivo de primeiros socorros, evacuação e combate a princípios de incêndio com simulados práticos.</p>
                  <a className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-emerald-700 group-hover:translate-x-2 transition-transform" href="#">
                    Ver Detalhes <span className="material-symbols-outlined text-sm">trending_flat</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 bg-slate-100" id="about">
          <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
              <div className="lg:col-span-6 relative">
                <div className="relative z-10 bg-white p-16 editorial-shadow rounded-sm border border-emerald-700/5">
                  <img alt="PUROSEG Logo" className="w-64 h-auto mx-auto mb-12 opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANiamL51rIC8Fxi5DYMe_p35lrLQhVlV44fJ_dIy8DjWxQBqxZEHsvDcVnKqmdYLfKD7WIQM9-zs6RW6ZPS0aLs8fMCz9V9QiGbiE7G2wV10ciCaaoJshU3vTFy_M8SNiUB6_BBlHcZG_pCYnOt7OPaU-1bepVTTjg7bXN2PmUrYmfykjJTMtbISEgI3UtOUypn5C5OzF5H9_cn4rB6fEGWhoCaiQpeTV7DE3gHzS0-VAaJKLpBVJJ1gugInzBXSzNR3OskH1WrkE" />
                  <div className="space-y-8 text-slate-600 leading-relaxed text-lg">
                    <p>
                      A PUROSEG nasceu da necessidade de elevating os padrões de segurança no ambiente industrial brasileiro. Não entregamos apenas laudos; entregamos tranquilidade estratégica para empresas que buscam alta performance.
                    </p>
                    <p>
                      Nossa metodologia combina rigor técnico, conhecimento jurídico atualizado e uma visão prática das operações de campo, garantindo soluções aplicáveis.
                    </p>
                  </div>
                </div>
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-100/50 -z-10 rounded-full blur-3xl"></div>
              </div>
              <div className="lg:col-span-6">
                <span className="text-emerald-700 font-bold tracking-widest uppercase text-sm mb-6 flex items-center gap-3">
                  <span className="w-10 h-px bg-emerald-700"></span> Nossa Essência
                </span>
                <h2 className="font-black text-4xl md:text-6xl text-slate-900 uppercase mb-12 leading-tight">
                  Referência Industrial em Consultoria de Segurança
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                  <div className="border-b border-emerald-700/10 pb-6">
                    <p className="text-4xl font-black text-emerald-700 mb-1">150+</p>
                    <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-600">Clientes Atendidos</p>
                  </div>
                  <div className="border-b border-emerald-700/10 pb-6">
                    <p className="text-4xl font-black text-emerald-700 mb-1">15k+</p>
                    <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-600">Vidas Treinadas</p>
                  </div>
                  <div className="border-b border-emerald-700/10 pb-6">
                    <p className="text-4xl font-black text-emerald-700 mb-1">100%</p>
                    <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-600">Conformidade</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-100" id="contact">
          <div className="w-full">
            <div className="bg-emerald-700 rounded-4xl p-12 md:p-24 relative overflow-hidden text-white editorial-shadow">
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/5 rounded-full"></div>
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 rounded-full"></div>
              <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
                <h2 className="font-black text-4xl md:text-7xl text-white mb-10 leading-[1.1] tracking-tighter">
                  Sua empresa segura e em conformidade. Comece agora.
                </h2>
                <p className="text-white/80 text-xl mb-12 max-w-2xl">
                  Agende uma consulta diagnóstica gratuita com um de nossos consultores seniores para avaliar sua estrutura atual.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                  <button className="bg-white text-emerald-700 px-12 py-5 text-sm font-black tracking-[0.2em] uppercase hover:bg-emerald-100 transition-all flex items-center justify-center gap-3 rounded-sm shadow-xl">
                    <span className="material-symbols-outlined">chat</span>
                    Falar no WhatsApp
                  </button>
                  <button className="border-2 border-white/30 text-white px-12 py-5 text-sm font-bold tracking-widest uppercase hover:bg-white/10 transition-all rounded-sm">
                    Formulário de Contato
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-emerald-700/10">
        <div className="w-full py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="space-y-8">
              <div className="text-2xl font-black text-emerald-700 uppercase tracking-tighter">
                PUROSEG
              </div>
              <p className="text-slate-600 text-base leading-relaxed max-w-xs">
                Excelência em engenharia de segurança do trabalho e treinamentos normativos de alto impacto para a indústria moderna.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full border border-emerald-700/20 flex items-center justify-center text-emerald-700 hover:bg-emerald-700 hover:text-white transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-lg">public</span>
                </div>
                <div className="w-10 h-10 rounded-full border border-emerald-700/20 flex items-center justify-center text-emerald-700 hover:bg-emerald-700 hover:text-white transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-lg">share</span>
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="text-xs tracking-[0.3em] uppercase text-emerald-700 font-black mb-10">Serviços</h5>
              <ul className="space-y-5">
                <li><a className="text-slate-600 hover:text-emerald-700 transition-colors text-sm font-medium" href="#">Documentos Técnicos</a></li>
                <li><a className="text-slate-600 hover:text-emerald-700 transition-colors text-sm font-medium" href="#">Treinamentos NR</a></li>
                <li><a className="text-slate-600 hover:text-emerald-700 transition-colors text-sm font-medium" href="#">Gestão eSocial</a></li>
                <li><a className="text-slate-600 hover:text-emerald-700 transition-colors text-sm font-medium" href="#">Laudos de Engenharia</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-xs tracking-[0.3em] uppercase text-emerald-700 font-black mb-10">Legal</h5>
              <ul className="space-y-5">
                <li><a className="text-slate-600 hover:text-emerald-700 transition-colors text-sm font-medium" href="#">Política de Privacidade</a></li>
                <li><a className="text-slate-600 hover:text-emerald-700 transition-colors text-sm font-medium" href="#">Termos de Uso</a></li>
                <li><a className="text-slate-600 hover:text-emerald-700 transition-colors text-sm font-medium" href="#">Compliance</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-xs tracking-[0.3em] uppercase text-emerald-700 font-black mb-10">Contato</h5>
              <address className="not-italic space-y-6">
                <p className="flex items-start gap-4 text-slate-600 text-sm">
                  <span className="material-symbols-outlined text-emerald-700" data-icon="location_on">location_on</span>
                  São Paulo, SP<br />Brasil
                </p>
                <p className="flex items-center gap-4 text-slate-600 text-sm">
                  <span className="material-symbols-outlined text-emerald-700" data-icon="mail">mail</span>
                  contato@puroseg.com.br
                </p>
                <p className="flex items-center gap-4 text-slate-600 text-sm font-bold">
                  <span className="material-symbols-outlined text-emerald-700" data-icon="call">call</span>
                  +55 (11) 9999-9999
                </p>
              </address>
            </div>
          </div>
          
          <div className="pt-10 border-t border-emerald-700/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-600 text-xs font-medium uppercase tracking-widest">
              © 2024 PUROSEG Industrial Safety. Todos os direitos reservados.
            </p>
            <div className="flex gap-8">
              <span className="text-[10px] font-bold text-emerald-700/40 uppercase tracking-widest">Segurança</span>
              <span className="text-[10px] font-bold text-emerald-700/40 uppercase tracking-widest">Qualidade</span>
              <span className="text-[10px] font-bold text-emerald-700/40 uppercase tracking-widest">Inovação</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
