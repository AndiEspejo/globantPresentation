import { useState } from 'react';
import { ChevronLeft, ChevronRight, Globe, Users, Target, Share2, Star, Database } from 'lucide-react';

const GlobantPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Portada
    {
      type: 'cover',
      content: (
        <div className='h-full flex flex-col items-center justify-center relative overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-br from-lime-400 via-green-500 to-emerald-600 opacity-90'></div>
          <div
            className='absolute inset-0'
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            }}
          ></div>
          <div className='relative z-10 text-center px-8'>
            <div className='mb-8 animate-pulse'>
              <Globe
                className='w-24 h-24 mx-auto text-white'
                strokeWidth={1.5}
              />
            </div>
            <div className='mb-4'>
              <img
                src={`${import.meta.env.BASE_URL}icono.jpeg`}
                alt='Globant'
                className='h-32 mx-auto object-contain'
              />
            </div>
            <div className='w-32 h-1 bg-white mx-auto mb-6'></div>
            <p className='text-2xl text-white font-light mb-12'>
              Análisis de Sistemas de Información
            </p>
            <p className='text-xl text-white/90 font-light'>
              Fundamentos de Sistemas de Información
            </p>
            <p className='text-lg text-white/80 mt-2'>
              Universidad de Antioquia - 2025
            </p>
          </div>
        </div>
      ),
    },

    // Slide 2: Sobre Globant
    {
      type: 'content',
      title: '¿Qué es Globant?',
      icon: <Globe className='w-8 h-8' />,
      content: (
        <div className='space-y-8'>
          <div className='bg-gradient-to-r from-lime-50 to-green-50 p-8 rounded-2xl border-l-4 border-lime-500 shadow-lg'>
            <h3 className='text-2xl font-bold text-gray-800 mb-4'>
              Actividad Económica
            </h3>
            <p className='text-lg text-gray-700 leading-relaxed'>
              Empresa global de servicios tecnológicos especializada en{' '}
              <span className='font-bold text-green-600'>
                transformación digital
              </span>
              , desarrollo de software, diseño UX/UI, inteligencia artificial y
              soluciones de TI innovadoras.
            </p>
          </div>

          <div className='grid grid-cols-3 gap-6'>
            <div className='bg-white p-6 rounded-xl shadow-lg border-t-4 border-lime-400 hover:scale-105 transition-transform'>
              <div className='text-4xl font-black text-lime-600 mb-2'>
                28,900+
              </div>
              <div className='text-gray-600'>Empleados</div>
            </div>
            <div className='bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-400 hover:scale-105 transition-transform'>
              <div className='text-4xl font-black text-green-600 mb-2'>33</div>
              <div className='text-gray-600'>Países</div>
            </div>
            <div className='bg-white p-6 rounded-xl shadow-lg border-t-4 border-emerald-400 hover:scale-105 transition-transform'>
              <div className='text-4xl font-black text-emerald-600 mb-2'>
                1,200+
              </div>
              <div className='text-gray-600'>Clientes</div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 3: Clientes
    {
      type: 'content',
      title: 'Nuestros Clientes',
      icon: <Users className='w-8 h-8' />,
      content: (
        <div className='space-y-6'>
          <div className='bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-2xl shadow-xl'>
            <p className='text-xl font-light text-center'>
              Globant trabaja con algunas de las marcas más reconocidas del
              mundo
            </p>
          </div>

          <div className='grid grid-cols-2 gap-6'>
            <div className='bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow'>
              <h4 className='font-bold text-lime-600 text-lg mb-4'>
                🎮 Tecnología & Medios
              </h4>
              <ul className='space-y-2 text-gray-700'>
                <li className='flex items-center'>
                  <span className='text-green-500 mr-2'>▸</span> Electronic Arts
                  (EA)
                </li>
                <li className='flex items-center'>
                  <span className='text-green-500 mr-2'>▸</span> Google
                </li>
                <li className='flex items-center'>
                  <span className='text-green-500 mr-2'>▸</span> Disney
                </li>
                <li className='flex items-center'>
                  <span className='text-green-500 mr-2'>▸</span> Warner Bros
                </li>
              </ul>
            </div>

            <div className='bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow'>
              <h4 className='font-bold text-green-600 text-lg mb-4'>
                🏦 Finanzas & Retail
              </h4>
              <ul className='space-y-2 text-gray-700'>
                <li className='flex items-center'>
                  <span className='text-lime-500 mr-2'>▸</span> HSBC
                </li>
                <li className='flex items-center'>
                  <span className='text-lime-500 mr-2'>▸</span> Santander
                </li>
                <li className='flex items-center'>
                  <span className='text-lime-500 mr-2'>▸</span> National
                  Geographic
                </li>
                <li className='flex items-center'>
                  <span className='text-lime-500 mr-2'>▸</span> LinkedIn
                </li>
              </ul>
            </div>
          </div>

          <div className='bg-lime-50 p-6 rounded-xl border-2 border-lime-200'>
            <p className='text-center text-gray-700 font-medium'>
              💡 Globant se especializa en sectores como entretenimiento,
              finanzas, salud, retail y más
            </p>
          </div>
        </div>
      ),
    },

    // Slide 4: Competidores
    {
      type: 'content',
      title: 'Competidores Principales',
      icon: <Target className='w-8 h-8' />,
      content: (
        <div className='space-y-6'>
          <div className='grid grid-cols-2 gap-6'>
            <div className='bg-gradient-to-br from-lime-100 to-green-100 p-6 rounded-xl shadow-lg border-l-4 border-lime-500'>
              <h4 className='font-bold text-xl text-gray-800 mb-4'>
                🌐 Competidores Globales
              </h4>
              <div className='space-y-3'>
                <div className='bg-white p-4 rounded-lg shadow'>
                  <div className='font-bold text-green-700'>Accenture</div>
                  <div className='text-sm text-gray-600'>
                    Consultoría y servicios tecnológicos globales
                  </div>
                </div>
                <div className='bg-white p-4 rounded-lg shadow'>
                  <div className='font-bold text-green-700'>Cognizant</div>
                  <div className='text-sm text-gray-600'>
                    Servicios de TI y consultoría empresarial
                  </div>
                </div>
                <div className='bg-white p-4 rounded-lg shadow'>
                  <div className='font-bold text-green-700'>EPAM Systems</div>
                  <div className='text-sm text-gray-600'>
                    Ingeniería de software y transformación digital
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-xl shadow-lg border-l-4 border-green-500'>
              <h4 className='font-bold text-xl text-gray-800 mb-4'>
                🇦🇷 Competidores Regionales
              </h4>
              <div className='space-y-3'>
                <div className='bg-white p-4 rounded-lg shadow'>
                  <div className='font-bold text-emerald-700'>BairesDev</div>
                  <div className='text-sm text-gray-600'>
                    Desarrollo de software y consultoría tecnológica
                  </div>
                </div>
                <div className='bg-white p-4 rounded-lg shadow'>
                  <div className='font-bold text-emerald-700'>Hexacta</div>
                  <div className='text-sm text-gray-600'>
                    Consultoría y desarrollo de software
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-gradient-to-r from-lime-500 to-green-600 text-white p-6 rounded-xl shadow-xl'>
            <p className='text-center font-medium text-lg'>
              ⚡ Ventaja competitiva: Enfoque en AI, innovación continua y
              studios especializados
            </p>
          </div>
        </div>
      ),
    },

    // Slide 5: Redes Sociales
    {
      type: 'content',
      title: 'Presencia en Redes Sociales',
      icon: <Share2 className='w-8 h-8' />,
      content: (
        <div className='space-y-6'>
          <div className='grid grid-cols-2 gap-6'>
            <div className='bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform border-t-4 border-lime-500'>
              <div className='text-4xl mb-3'>💼</div>
              <h4 className='font-bold text-xl text-gray-800 mb-2'>LinkedIn</h4>
              <p className='text-gray-600'>
                Principal canal profesional y de reclutamiento
              </p>
              <div className='mt-4 text-sm text-lime-600 font-semibold'>
                +1M seguidores
              </div>
            </div>

            <div className='bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform border-t-4 border-green-500'>
              <div className='text-4xl mb-3'>🐦</div>
              <h4 className='font-bold text-xl text-gray-800 mb-2'>
                Twitter/X
              </h4>
              <p className='text-gray-600'>
                Noticias, tendencias tech y actualizaciones
              </p>
              <div className='mt-4 text-sm text-green-600 font-semibold'>
                @Globant
              </div>
            </div>

            <div className='bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform border-t-4 border-emerald-500'>
              <div className='text-4xl mb-3'>📘</div>
              <h4 className='font-bold text-xl text-gray-800 mb-2'>Facebook</h4>
              <p className='text-gray-600'>
                Contenido corporativo y cultura organizacional
              </p>
              <div className='mt-4 text-sm text-emerald-600 font-semibold'>
                Engagement activo
              </div>
            </div>

            <div className='bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform border-t-4 border-lime-600'>
              <div className='text-4xl mb-3'>📸</div>
              <h4 className='font-bold text-xl text-gray-800 mb-2'>
                Instagram
              </h4>
              <p className='text-gray-600'>
                Cultura empresarial, eventos y proyectos
              </p>
              <div className='mt-4 text-sm text-lime-600 font-semibold'>
                Contenido visual
              </div>
            </div>
          </div>

          <div className='bg-gradient-to-r from-lime-50 to-green-50 p-6 rounded-xl border-2 border-green-200'>
            <p className='text-center text-gray-700 font-medium text-lg'>
              🌐 También presente en: YouTube, GitHub, Glassdoor y Medium
            </p>
          </div>
        </div>
      ),
    },

    // Slide 6: Recordación
    {
      type: 'content',
      title: '¿Qué genera recordación?',
      icon: <Star className='w-8 h-8' />,
      content: (
        <div className='space-y-6'>
          <div className='grid grid-cols-2 gap-6'>
            <div className='bg-gradient-to-br from-lime-400 to-green-500 text-white p-8 rounded-2xl shadow-xl'>
              <div className='text-5xl mb-4'>🤖</div>
              <h4 className='font-bold text-2xl mb-3'>Innovación en AI</h4>
              <p className='text-white/90 leading-relaxed'>
                Líderes en inteligencia artificial empresarial con Globant
                Enterprise AI y soluciones de vanguardia
              </p>
            </div>

            <div className='bg-gradient-to-br from-green-400 to-emerald-500 text-white p-8 rounded-2xl shadow-xl'>
              <div className='text-5xl mb-4'>🎨</div>
              <h4 className='font-bold text-2xl mb-3'>
                Studios Especializados
              </h4>
              <p className='text-white/90 leading-relaxed'>
                Equipos dedicados por industria: Gaming, Media, Fintech,
                Healthcare y más
              </p>
            </div>

            <div className='bg-gradient-to-br from-emerald-400 to-teal-500 text-white p-8 rounded-2xl shadow-xl'>
              <div className='text-5xl mb-4'>🌍</div>
              <h4 className='font-bold text-2xl mb-3'>Alcance Global</h4>
              <p className='text-white/90 leading-relaxed'>
                Presencia en 33 países con proyectos para marcas icónicas
                mundiales
              </p>
            </div>

            <div className='bg-gradient-to-br from-teal-400 to-cyan-500 text-white p-8 rounded-2xl shadow-xl'>
              <div className='text-5xl mb-4'>💚</div>
              <h4 className='font-bold text-2xl mb-3'>Cultura "Be Kind"</h4>
              <p className='text-white/90 leading-relaxed'>
                Ambiente de trabajo inclusivo, innovador y centrado en las
                personas
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 7: Sistemas de Información - Parte 1
    {
      type: 'content',
      title: 'Sistemas de Información (1/2)',
      icon: <Database className='w-8 h-8' />,
      content: (
        <div className='space-y-6'>
          <div className='bg-gradient-to-r from-lime-500 to-green-600 text-white p-6 rounded-2xl shadow-xl'>
            <h3 className='text-2xl font-bold text-center'>
              Plataformas Principales de Globant
            </h3>
          </div>

          <div className='space-y-4'>
            <div className='bg-white p-6 rounded-xl shadow-lg border-l-4 border-lime-500 hover:shadow-xl transition-shadow'>
              <div className='flex items-start gap-4'>
                <div className='text-4xl'>🤖</div>
                <div className='flex-1'>
                  <h4 className='font-bold text-xl text-gray-800 mb-2'>
                    Globant Enterprise AI
                  </h4>
                  <p className='text-gray-700 mb-3'>
                    Plataforma empresarial para implementación de asistentes de
                    IA adaptados a necesidades específicas
                  </p>
                  <div className='bg-lime-50 p-4 rounded-lg'>
                    <p className='text-sm text-gray-700'>
                      <span className='font-semibold text-lime-700'>Uso:</span>{' '}
                      Integración y gestión de modelos LLM, supervisión de
                      acceso, control de costos y mejora de productividad e
                      innovación
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow'>
              <div className='flex items-start gap-4'>
                <div className='text-4xl'>💼</div>
                <div className='flex-1'>
                  <h4 className='font-bold text-xl text-gray-800 mb-2'>
                    Workspace Corporativo
                  </h4>
                  <p className='text-gray-700 mb-3'>
                    Plataforma accesible para usuarios @globant.com con
                    proyectos y asistentes especializados
                  </p>
                  <div className='bg-green-50 p-4 rounded-lg'>
                    <p className='text-sm text-gray-700'>
                      <span className='font-semibold text-green-700'>
                        Incluye:
                      </span>{' '}
                      Globant Chat, Globant Agents, Globant Studios -
                      herramientas para tareas específicas y colaboración
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 8: Sistemas de Información - Parte 2
    {
      type: 'content',
      title: 'Sistemas de Información (2/2)',
      icon: <Database className='w-8 h-8' />,
      content: (
        <div className='space-y-6'>
          <div className='grid grid-cols-2 gap-6'>
            <div className='bg-white p-6 rounded-xl shadow-lg border-l-4 border-emerald-500'>
              <div className='text-3xl mb-3'>💬</div>
              <h4 className='font-bold text-lg text-gray-800 mb-2'>
                Sistemas de Comunicación
              </h4>
              <ul className='space-y-2 text-sm text-gray-700'>
                <li className='flex items-center'>
                  <span className='text-emerald-500 mr-2'>✓</span> Correo
                  @globant.com
                </li>
                <li className='flex items-center'>
                  <span className='text-emerald-500 mr-2'>✓</span> Extensiones
                  telefónicas
                </li>
                <li className='flex items-center'>
                  <span className='text-emerald-500 mr-2'>✓</span> Herramientas
                  de chat autorizadas
                </li>
                <li className='flex items-center'>
                  <span className='text-emerald-500 mr-2'>✓</span> Google Drive
                  compartido
                </li>
              </ul>
              <div className='mt-3 text-xs text-gray-600 italic'>
                Uso: Comunicación segura interna y con socios
              </div>
            </div>

            <div className='bg-white p-6 rounded-xl shadow-lg border-l-4 border-teal-500'>
              <div className='text-3xl mb-3'>🔒</div>
              <h4 className='font-bold text-lg text-gray-800 mb-2'>
                Sistema de Seguridad (ISMS)
              </h4>
              <ul className='space-y-2 text-sm text-gray-700'>
                <li className='flex items-center'>
                  <span className='text-teal-500 mr-2'>✓</span> Políticas de
                  control de acceso
                </li>
                <li className='flex items-center'>
                  <span className='text-teal-500 mr-2'>✓</span> Gestión de redes
                  seguras
                </li>
                <li className='flex items-center'>
                  <span className='text-teal-500 mr-2'>✓</span> Seguridad física
                  y de software
                </li>
                <li className='flex items-center'>
                  <span className='text-teal-500 mr-2'>✓</span> Procesamiento
                  seguro de información
                </li>
              </ul>
              <div className='mt-3 text-xs text-gray-600 italic'>
                Uso: Protección de datos y operaciones seguras
              </div>
            </div>
          </div>

          <div className='bg-gradient-to-br from-lime-100 to-green-100 p-6 rounded-xl border-2 border-green-300'>
            <h4 className='font-bold text-lg text-gray-800 mb-3'>
              🛠️ Entornos Especializados de AI
            </h4>
            <div className='grid grid-cols-3 gap-4 text-sm'>
              <div className='bg-white p-3 rounded-lg shadow'>
                <div className='font-semibold text-lime-700'>SAIA Corp</div>
                <div className='text-xs text-gray-600'>Desarrollo y POC</div>
              </div>
              <div className='bg-white p-3 rounded-lg shadow'>
                <div className='font-semibold text-green-700'>Agents Env</div>
                <div className='text-xs text-gray-600'>
                  Proyectos personales
                </div>
              </div>
              <div className='bg-white p-3 rounded-lg shadow'>
                <div className='font-semibold text-emerald-700'>
                  CodeFixer/MagnifAI
                </div>
                <div className='text-xs text-gray-600'>
                  Herramientas específicas
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 9: Cierre
    {
      type: 'closing',
      content: (
        <div className='h-full flex flex-col items-center justify-center relative overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-br from-emerald-600 via-green-500 to-lime-400 opacity-90'></div>
          <div
            className='absolute inset-0'
            style={{
              backgroundImage:
                'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.15) 0%, transparent 50%)',
            }}
          ></div>
          <div className='relative z-10 text-center px-8'>
            <div className='mb-8'>
              <Globe
                className='w-32 h-32 mx-auto text-white opacity-90'
                strokeWidth={1.5}
              />
            </div>
            <h2 className='text-6xl font-black text-white mb-6'>¡GRACIAS!</h2>
            <div className='w-40 h-1 bg-white mx-auto mb-8'></div>
            <p className='text-2xl text-white font-light mb-4'>
              Globant: Reinventando el futuro digital
            </p>
            <p className='text-xl text-white/90 mb-12'>
              con tecnología, creatividad e innovación
            </p>
            <div className='bg-white/20 backdrop-blur-sm p-6 rounded-xl inline-block'>
              <p className='text-white text-lg'>Universidad de Antioquia</p>
              <p className='text-white/90'>
                Fundamentos de Sistemas de Información - 2025
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col">
      {/* Main Slide Area */}
      <div className="flex-1 relative bg-white shadow-2xl">
        {currentSlideData.type === 'cover' || currentSlideData.type === 'closing' ? (
          currentSlideData.content
        ) : (
          <div className="h-full p-12 overflow-auto">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8 pb-6 border-b-4 border-lime-500">
              <div className="bg-gradient-to-br from-lime-400 to-green-500 p-3 rounded-xl text-white shadow-lg">
                {currentSlideData.icon}
              </div>
              <h2 className="text-4xl font-black text-gray-800">{currentSlideData.title}</h2>
            </div>
            
            {/* Content */}
            <div className="mt-6">
              {currentSlideData.content}
            </div>
          </div>
        )}
      </div>

      {/* Navigation Controls */}
      <div className="bg-gradient-to-r from-lime-500 to-green-600 p-4 flex items-center justify-between shadow-lg">
        <button
          onClick={prevSlide}
          className="bg-white text-green-600 p-3 rounded-lg hover:bg-lime-50 transition-colors shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all rounded-full ${
                index === currentSlide
                  ? 'bg-white w-12 h-3'
                  : 'bg-white/50 w-3 h-3 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="flex items-center gap-4">
          <span className="text-white font-semibold text-lg">
            {currentSlide + 1} / {slides.length}
          </span>
          <button
            onClick={nextSlide}
            className="bg-white text-green-600 p-3 rounded-lg hover:bg-lime-50 transition-colors shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentSlide === slides.length - 1}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GlobantPresentation;

