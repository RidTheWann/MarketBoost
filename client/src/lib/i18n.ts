import { useState, useEffect, createContext, useContext } from 'react';

// Available languages
export type Language = 'en' | 'es' | 'fr' | 'id';

// Translation dictionary type
type TranslationDictionary = {
  [key in Language]: {
    [key: string]: string;
  };
};

// Translations for the application
export const translations: TranslationDictionary = {
  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.testimonials': 'Testimonials',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',
    
    // Hero Section
    'hero.defaultHeading': 'Create beautiful websites without code',
    'hero.defaultSubheading': 'Build, launch, and grow your business online with our powerful platform. Join thousands of successful companies who trust us.',
    'hero.defaultPrimaryButton': 'Start Building Free',
    'hero.defaultSecondaryButton': 'Watch Demo',
    'hero.trustedBy': 'Trusted by leading companies worldwide',
    
    // Features Section
    'features.heading': 'Powerful Features',
    'features.subheading': 'Discover the tools and features that will transform your business operations and drive success in the digital landscape.',
    
    // Testimonials Section
    'testimonials.heading': 'What Our Clients Say',
    'testimonials.subheading': 'Don\'t just take our word for it. Here\'s what our clients have to say about their experience with MarketBoost.',
    
    // Pricing Section
    'pricing.heading': 'Simple, Transparent Pricing',
    'pricing.subheading': 'No hidden fees or complicated tiers. Choose the plan that works best for your business needs.',
    'pricing.monthly': 'Monthly',
    'pricing.yearly': 'Yearly',
    'pricing.popular': 'Most Popular',
    'pricing.getStarted': 'Get Started',
    'pricing.currentPlan': 'Current Plan',
    
    // Contact Section
    'contact.heading': 'Get in Touch',
    'contact.subheading': 'Have questions or need assistance? Our team is here to help you succeed.',
    'contact.nameLabel': 'Your Name',
    'contact.emailLabel': 'Email Address',
    'contact.messageLabel': 'Your Message',
    'contact.submitButton': 'Send Message',
    'contact.success': 'Your message has been sent successfully!',
    'contact.error': 'There was an error sending your message. Please try again.',
    
    // Footer
    'footer.copyright': '© 2023 MarketBoost. All rights reserved.',
    'footer.terms': 'Terms of Service',
    'footer.privacy': 'Privacy Policy',
  },
  es: {
    // Navigation
    'nav.features': 'Características',
    'nav.testimonials': 'Testimonios',
    'nav.pricing': 'Precios',
    'nav.contact': 'Contacto',
    'nav.getStarted': 'Comenzar',
    
    // Hero Section
    'hero.defaultHeading': 'Crea sitios web hermosos sin código',
    'hero.defaultSubheading': 'Construye, lanza y haz crecer tu negocio en línea con nuestra potente plataforma. Únete a miles de empresas exitosas que confían en nosotros.',
    'hero.defaultPrimaryButton': 'Comienza Gratis',
    'hero.defaultSecondaryButton': 'Ver Demo',
    'hero.trustedBy': 'Confiado por empresas líderes en todo el mundo',
    
    // Features Section
    'features.heading': 'Características Potentes',
    'features.subheading': 'Descubre las herramientas y características que transformarán las operaciones de tu negocio y impulsarán el éxito en el panorama digital.',
    
    // Testimonials Section
    'testimonials.heading': 'Lo Que Dicen Nuestros Clientes',
    'testimonials.subheading': 'No solo tomes nuestra palabra. Esto es lo que nuestros clientes dicen sobre su experiencia con MarketBoost.',
    
    // Pricing Section
    'pricing.heading': 'Precios Simples y Transparentes',
    'pricing.subheading': 'Sin tarifas ocultas ni niveles complicados. Elige el plan que mejor se adapte a las necesidades de tu negocio.',
    'pricing.monthly': 'Mensual',
    'pricing.yearly': 'Anual',
    'pricing.popular': 'Más Popular',
    'pricing.getStarted': 'Comenzar',
    'pricing.currentPlan': 'Plan Actual',
    
    // Contact Section
    'contact.heading': 'Ponte en Contacto',
    'contact.subheading': '¿Tienes preguntas o necesitas ayuda? Nuestro equipo está aquí para ayudarte a tener éxito.',
    'contact.nameLabel': 'Tu Nombre',
    'contact.emailLabel': 'Dirección de Correo',
    'contact.messageLabel': 'Tu Mensaje',
    'contact.submitButton': 'Enviar Mensaje',
    'contact.success': '¡Tu mensaje ha sido enviado con éxito!',
    'contact.error': 'Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.',
    
    // Footer
    'footer.copyright': '© 2023 MarketBoost. Todos los derechos reservados.',
    'footer.terms': 'Términos de Servicio',
    'footer.privacy': 'Política de Privacidad',
  },
  fr: {
    // Navigation
    'nav.features': 'Fonctionnalités',
    'nav.testimonials': 'Témoignages',
    'nav.pricing': 'Tarifs',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Commencer',
    
    // Hero Section
    'hero.defaultHeading': 'Créez de beaux sites web sans code',
    'hero.defaultSubheading': 'Construisez, lancez et développez votre entreprise en ligne avec notre plateforme puissante. Rejoignez des milliers d\'entreprises prospères qui nous font confiance.',
    'hero.defaultPrimaryButton': 'Commencer Gratuitement',
    'hero.defaultSecondaryButton': 'Voir la Démo',
    'hero.trustedBy': 'Approuvé par des entreprises leaders dans le monde entier',
    
    // Features Section
    'features.heading': 'Fonctionnalités Puissantes',
    'features.subheading': 'Découvrez les outils et fonctionnalités qui transformeront les opérations de votre entreprise et favoriseront le succès dans le paysage numérique.',
    
    // Testimonials Section
    'testimonials.heading': 'Ce Que Disent Nos Clients',
    'testimonials.subheading': 'Ne vous fiez pas seulement à notre parole. Voici ce que nos clients disent de leur expérience avec MarketBoost.',
    
    // Pricing Section
    'pricing.heading': 'Tarification Simple et Transparente',
    'pricing.subheading': 'Pas de frais cachés ni de niveaux compliqués. Choisissez le forfait qui convient le mieux aux besoins de votre entreprise.',
    'pricing.monthly': 'Mensuel',
    'pricing.yearly': 'Annuel',
    'pricing.popular': 'Plus Populaire',
    'pricing.getStarted': 'Commencer',
    'pricing.currentPlan': 'Forfait Actuel',
    
    // Contact Section
    'contact.heading': 'Contactez-Nous',
    'contact.subheading': 'Vous avez des questions ou besoin d\'aide? Notre équipe est là pour vous aider à réussir.',
    'contact.nameLabel': 'Votre Nom',
    'contact.emailLabel': 'Adresse Email',
    'contact.messageLabel': 'Votre Message',
    'contact.submitButton': 'Envoyer le Message',
    'contact.success': 'Votre message a été envoyé avec succès!',
    'contact.error': 'Une erreur s\'est produite lors de l\'envoi de votre message. Veuillez réessayer.',
    
    // Footer
    'footer.copyright': '© 2023 MarketBoost. Tous droits réservés.',
    'footer.terms': 'Conditions d\'Utilisation',
    'footer.privacy': 'Politique de Confidentialité',
  },
  id: {
    // Navigation
    'nav.features': 'Fitur',
    'nav.testimonials': 'Testimoni',
    'nav.pricing': 'Harga',
    'nav.contact': 'Kontak',
    'nav.getStarted': 'Mulai',
    
    // Hero Section
    'hero.defaultHeading': 'Buat website indah tanpa kode',
    'hero.defaultSubheading': 'Bangun, luncurkan, dan kembangkan bisnis Anda secara online dengan platform kami yang powerful. Bergabunglah dengan ribuan perusahaan sukses yang mempercayai kami.',
    'hero.defaultPrimaryButton': 'Mulai Gratis',
    'hero.defaultSecondaryButton': 'Tonton Demo',
    'hero.trustedBy': 'Dipercaya oleh perusahaan terkemuka di seluruh dunia',
    
    // Features Section
    'features.heading': 'Fitur Unggulan',
    'features.subheading': 'Temukan alat dan fitur yang akan mengubah operasi bisnis Anda dan mendorong kesuksesan di lanskap digital.',
    
    // Testimonials Section
    'testimonials.heading': 'Apa Kata Klien Kami',
    'testimonials.subheading': 'Jangan hanya percaya kata-kata kami. Inilah yang dikatakan klien kami tentang pengalaman mereka dengan MarketBoost.',
    
    // Pricing Section
    'pricing.heading': 'Harga Sederhana dan Transparan',
    'pricing.subheading': 'Tanpa biaya tersembunyi atau tingkatan yang rumit. Pilih paket yang paling sesuai dengan kebutuhan bisnis Anda.',
    'pricing.monthly': 'Bulanan',
    'pricing.yearly': 'Tahunan',
    'pricing.popular': 'Paling Populer',
    'pricing.getStarted': 'Mulai',
    'pricing.currentPlan': 'Paket Saat Ini',
    
    // Contact Section
    'contact.heading': 'Hubungi Kami',
    'contact.subheading': 'Punya pertanyaan atau butuh bantuan? Tim kami siap membantu Anda sukses.',
    'contact.nameLabel': 'Nama Anda',
    'contact.emailLabel': 'Alamat Email',
    'contact.messageLabel': 'Pesan Anda',
    'contact.submitButton': 'Kirim Pesan',
    'contact.success': 'Pesan Anda telah berhasil dikirim!',
    'contact.error': 'Terjadi kesalahan saat mengirim pesan Anda. Silakan coba lagi.',
    
    // Footer
    'footer.copyright': '© 2023 MarketBoost. Semua hak dilindungi undang-undang.',
    'footer.terms': 'Syarat Layanan',
    'footer.privacy': 'Kebijakan Privasi',
  }
};

// Default export for dynamic import
export default translations;