import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  BarChart3,
  GraduationCap,
  Briefcase,
  TrendingUp,
  Award,
  Clock,
  CheckCircle2,
  ArrowRight,
  ArrowLeft
} from "lucide-react";
import { useTranslation } from "react-i18next";
import psIcon from "../assets/psIcon.svg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";

const Landing = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const data = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    await fetch("https://script.google.com/macros/s/AKfycbxN3KJJ8-rvPZfrPMdbAmAHBwaba1UvS2DnAIIGrV6AU2jhdLTgDTqNs_WD3Q4iO0Bn_g/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setIsDialogOpen(false);
    setLoading(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
    alert("Message sent!");
  }
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="relative w-full h-full">
          <div
            className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#1e40af]/10 to-[#2563eb]/10 top-[10%] left-[10%] animate-float"
            style={{ animationDuration: "25s", animationDelay: "0s" }}
          ></div>
          <div
            className="absolute w-[200px] h-[200px] rounded-full bg-gradient-to-br from-[#0ea5e9]/10 to-[#60a5fa]/10 top-[60%] right-[15%] animate-float"
            style={{ animationDuration: "30s", animationDelay: "2s" }}
          ></div>
          <div
            className="absolute w-[150px] h-[150px] rounded-full bg-gradient-to-br from-[#2563eb]/10 to-[#3b82f6]/10 bottom-[20%] left-[20%] animate-float"
            style={{ animationDuration: "20s", animationDelay: "4s" }}
          ></div>
          <div
            className="absolute w-[250px] h-[250px] rounded-full bg-gradient-to-br from-[#60a5fa]/10 to-[#0ea5e9]/10 top-[30%] right-[30%] animate-float"
            style={{ animationDuration: "35s", animationDelay: "1s" }}
          ></div>
          <div
            className="absolute w-[180px] h-[180px] rounded-full bg-gradient-to-br from-[#1e40af]/10 to-[#1e3a8a]/10 bottom-[40%] right-[10%] animate-float"
            style={{ animationDuration: "28s", animationDelay: "3s" }}
          ></div>
          <div
            className="absolute w-[120px] h-[120px] rounded-full bg-gradient-to-br from-[#2563eb]/10 to-[#0ea5e9]/10 top-[70%] left-[50%] animate-float"
            style={{ animationDuration: "22s", animationDelay: "5s" }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center py-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight">
              <span className="block bg-gradient-to-br from-[#1e40af] via-[#2563eb] to-[#0ea5e9] bg-clip-text text-transparent animate-fade-in-up">
                {t("landing.hero.title1")}
              </span>
              <span
                className="block bg-gradient-to-br from-[#1e40af] via-[#2563eb] to-[#0ea5e9] bg-clip-text text-transparent animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                {t("landing.hero.title2")}
              </span>
            </h1>
            <p
              className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              {t("landing.hero.description")}
            </p>
            <div
              className="flex gap-6 justify-center flex-wrap animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <Link to="/contact" className="btn btn-primary">
                {t("landing.hero.getStarted")}
              </Link>
              <Link to="/about" className="btn btn-secondary">
                {t("landing.hero.learnMore")}
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div
              className="bg-white/90 backdrop-blur-md p-8 rounded-2xl text-center transition-all duration-300 shadow-lg shadow-blue-900/10 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/20 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-[#1e40af] flex items-center justify-center text-[#1e40af]">
                <Users size={32} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-semibold text-[#1e40af] mb-4">
                {t("landing.features.talentAcquisition.title")}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t("landing.features.talentAcquisition.description")}
              </p>
            </div>
            <div
              className="bg-white/90 backdrop-blur-md p-8 rounded-2xl text-center transition-all duration-300 shadow-lg shadow-blue-900/10 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/20 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-[#1e40af] flex items-center justify-center text-[#1e40af]">
                <BarChart3 size={32} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-semibold text-[#1e40af] mb-4">
                {t("landing.features.hrStrategy.title")}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t("landing.features.hrStrategy.description")}
              </p>
            </div>
            <div
              className="bg-white/90 backdrop-blur-md p-8 rounded-2xl text-center transition-all duration-300 shadow-lg shadow-blue-900/10 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/20 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-[#1e40af] flex items-center justify-center text-[#1e40af]">
                <GraduationCap size={32} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-semibold text-[#1e40af] mb-4">
                {t("landing.features.training.title")}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t("landing.features.training.description")}
              </p>
            </div>
            <div
              className="bg-white/90 backdrop-blur-md p-8 rounded-2xl text-center transition-all duration-300 shadow-lg shadow-blue-900/10 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/20 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-[#1e40af] flex items-center justify-center text-[#1e40af]">
                <Briefcase size={32} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-semibold text-[#1e40af] mb-4">
                {t("landing.features.consulting.title")}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t("landing.features.consulting.description")}
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e40af] mb-4">
                {t("landing.statistics.title")}
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                {t("landing.statistics.subtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-[#1e40af] flex items-center justify-center text-[#1e40af]">
                  <TrendingUp size={40} strokeWidth={2} />
                </div>
                <div className="text-5xl font-bold text-[#1e40af] mb-2">
                  500+
                </div>
                <p className="text-slate-600 text-lg">
                  {t("landing.statistics.companiesServed")}
                </p>
              </div>
              <div
                className="text-center p-8 bg-white rounded-2xl shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-[#1e40af] flex items-center justify-center text-[#1e40af]">
                  <Award size={40} strokeWidth={2} />
                </div>
                <div className="text-5xl font-bold text-[#1e40af] mb-2">
                  98%
                </div>
                <p className="text-slate-600 text-lg">
                  {t("landing.statistics.clientSatisfaction")}
                </p>
              </div>
              <div
                className="text-center p-8 bg-white rounded-2xl shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-[#1e40af] flex items-center justify-center text-[#1e40af]">
                  <Users size={40} strokeWidth={2} />
                </div>
                <div className="text-5xl font-bold text-[#1e40af] mb-2">
                  50K+
                </div>
                <p className="text-slate-600 text-lg">
                  {t("landing.statistics.talentsPlaced")}
                </p>
              </div>
              <div
                className="text-center p-8 bg-white rounded-2xl shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-[#1e40af] flex items-center justify-center text-[#1e40af]">
                  <Clock size={40} strokeWidth={2} />
                </div>
                <div className="text-5xl font-bold text-[#1e40af] mb-2">
                  15+
                </div>
                <p className="text-slate-600 text-lg">
                  {t("landing.statistics.yearsExperience")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e40af] mb-4">
                {t("landing.services.title")}
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                {t("landing.services.subtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up">
                <div className="w-16 h-16 mb-6 rounded-full border-2 border-[#1e40af] flex items-center justify-center text-[#1e40af]">
                  <Users size={32} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-[#1e40af] mb-4">
                  {t("landing.services.recruitment.title")}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {t("landing.services.recruitment.description")}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2
                      size={20}
                      className="text-[#2563eb] mr-2 flex-shrink-0"
                      strokeWidth={2}
                    />
                    {t("landing.services.recruitment.executiveSearch")}
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2
                      size={20}
                      className="text-[#2563eb] mr-2 flex-shrink-0"
                      strokeWidth={2}
                    />
                    {t("landing.services.recruitment.temporaryStaffing")}
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2
                      size={20}
                      className="text-[#2563eb] mr-2 flex-shrink-0"
                      strokeWidth={2}
                    />
                    {t("landing.services.recruitment.backgroundVerification")}
                  </li>
                </ul>
              </div>
              <div
                className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="w-16 h-16 mb-6 rounded-full border-2 border-[#1e40af] flex items-center justify-center text-[#1e40af]">
                  <BarChart3 size={32} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-[#1e40af] mb-4">
                  {t("landing.services.strategy.title")}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {t("landing.services.strategy.description")}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2
                      size={20}
                      className="text-[#2563eb] mr-2 flex-shrink-0"
                      strokeWidth={2}
                    />
                    {t("landing.services.strategy.orgDesign")}
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2
                      size={20}
                      className="text-[#2563eb] mr-2 flex-shrink-0"
                      strokeWidth={2}
                    />
                    {t("landing.services.strategy.workforcePlanning")}
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2
                      size={20}
                      className="text-[#2563eb] mr-2 flex-shrink-0"
                      strokeWidth={2}
                    />
                    {t("landing.services.strategy.performanceManagement")}
                  </li>
                </ul>
              </div>
              <div
                className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="w-16 h-16 mb-6 rounded-full border-2 border-[#1e40af] flex items-center justify-center text-[#1e40af]">
                  <GraduationCap size={32} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-[#1e40af] mb-4">
                  {t("landing.services.learning.title")}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {t("landing.services.learning.description")}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2
                      size={20}
                      className="text-[#2563eb] mr-2 flex-shrink-0"
                      strokeWidth={2}
                    />
                    {t("landing.services.learning.leadershipTraining")}
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2
                      size={20}
                      className="text-[#2563eb] mr-2 flex-shrink-0"
                      strokeWidth={2}
                    />
                    {t("landing.services.learning.skillDevelopment")}
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2
                      size={20}
                      className="text-[#2563eb] mr-2 flex-shrink-0"
                      strokeWidth={2}
                    />
                    {t("landing.services.learning.complianceTraining")}
                  </li>
                </ul>
              </div>
              <div
                className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="w-16 h-16 mb-6 rounded-full border-2 border-[#1e40af] flex items-center justify-center text-[#1e40af]">
                  <Briefcase size={32} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-[#1e40af] mb-4">
                  {t("landing.services.consulting.title")}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {t("landing.services.consulting.description")}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2
                      size={20}
                      className="text-[#2563eb] mr-2 flex-shrink-0"
                      strokeWidth={2}
                    />
                    {t("landing.services.consulting.policyDevelopment")}
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2
                      size={20}
                      className="text-[#2563eb] mr-2 flex-shrink-0"
                      strokeWidth={2}
                    />
                    {t("landing.services.consulting.compensationBenefits")}
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2
                      size={20}
                      className="text-[#2563eb] mr-2 flex-shrink-0"
                      strokeWidth={2}
                    />
                    {t("landing.services.consulting.employeeRelations")}
                  </li>
                </ul>
              </div>
              <div
                className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="w-16 h-16 mb-6 rounded-full border-2 border-[#1e40af] flex items-center justify-center text-[#1e40af]">
                  <TrendingUp size={32} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-[#1e40af] mb-4">
                  {t("landing.services.changeManagement.title")}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {t("landing.services.changeManagement.description")}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2
                      size={20}
                      className="text-[#2563eb] mr-2 flex-shrink-0"
                      strokeWidth={2}
                    />
                    {t("landing.services.changeManagement.orgTransformation")}
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2
                      size={20}
                      className="text-[#2563eb] mr-2 flex-shrink-0"
                      strokeWidth={2}
                    />
                    {t("landing.services.changeManagement.maSupport")}
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2
                      size={20}
                      className="text-[#2563eb] mr-2 flex-shrink-0"
                      strokeWidth={2}
                    />
                    {t("landing.services.changeManagement.cultureIntegration")}
                  </li>
                </ul>
              </div>
              <div
                className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="w-16 h-16 mb-6 rounded-full border-2 border-[#1e40af] flex items-center justify-center text-[#1e40af]">
                  <Award size={32} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-[#1e40af] mb-4">
                  {t("landing.services.compliance.title")}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {t("landing.services.compliance.description")}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2
                      size={20}
                      className="text-[#2563eb] mr-2 flex-shrink-0"
                      strokeWidth={2}
                    />
                    {t("landing.services.compliance.hrAudits")}
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2
                      size={20}
                      className="text-[#2563eb] mr-2 flex-shrink-0"
                      strokeWidth={2}
                    />
                    {t("landing.services.compliance.legalCompliance")}
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2
                      size={20}
                      className="text-[#2563eb] mr-2 flex-shrink-0"
                      strokeWidth={2}
                    />
                    {t("landing.services.compliance.riskAssessment")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e40af] mb-4">
                {t("landing.howItWorks.title")}
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                {t("landing.howItWorks.subtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center animate-fade-in-up relative">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-[#1e40af] bg-white flex items-center justify-center text-[#1e40af] relative">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <div
                  className={`absolute ${
                    isRTL
                      ? "left-0 translate-x-[-50%]"
                      : "right-0 translate-x-[50%]"
                  } top-8 hidden md:block`}
                >
                  {isRTL ? (
                    <ArrowLeft
                      size={24}
                      className="text-[#2563eb]"
                      strokeWidth={2}
                    />
                  ) : (
                    <ArrowRight
                      size={24}
                      className="text-[#2563eb]"
                      strokeWidth={2}
                    />
                  )}
                </div>
                <h3 className="text-xl font-bold text-[#1e40af] mb-4">
                  {t("landing.howItWorks.consultation.title")}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t("landing.howItWorks.consultation.description")}
                </p>
              </div>
              <div
                className="text-center animate-fade-in-up relative"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-[#1e40af] bg-white flex items-center justify-center text-[#1e40af] relative">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <div
                  className={`absolute ${
                    isRTL
                      ? "left-0 translate-x-[-50%]"
                      : "right-0 translate-x-[50%]"
                  } top-8 hidden md:block`}
                >
                  {isRTL ? (
                    <ArrowLeft
                      size={24}
                      className="text-[#2563eb]"
                      strokeWidth={2}
                    />
                  ) : (
                    <ArrowRight
                      size={24}
                      className="text-[#2563eb]"
                      strokeWidth={2}
                    />
                  )}
                </div>
                <h3 className="text-xl font-bold text-[#1e40af] mb-4">
                  {t("landing.howItWorks.strategy.title")}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t("landing.howItWorks.strategy.description")}
                </p>
              </div>
              <div
                className="text-center animate-fade-in-up relative"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-[#1e40af] bg-white flex items-center justify-center text-[#1e40af] relative">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <div
                  className={`absolute ${
                    isRTL
                      ? "left-0 translate-x-[-50%]"
                      : "right-0 translate-x-[50%]"
                  } top-8 hidden md:block`}
                >
                  {isRTL ? (
                    <ArrowLeft
                      size={24}
                      className="text-[#2563eb]"
                      strokeWidth={2}
                    />
                  ) : (
                    <ArrowRight
                      size={24}
                      className="text-[#2563eb]"
                      strokeWidth={2}
                    />
                  )}
                </div>
                <h3 className="text-xl font-bold text-[#1e40af] mb-4">
                  {t("landing.howItWorks.implementation.title")}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t("landing.howItWorks.implementation.description")}
                </p>
              </div>
              <div
                className="text-center animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-[#1e40af] bg-white flex items-center justify-center text-[#1e40af]">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold text-[#1e40af] mb-4">
                  {t("landing.howItWorks.support.title")}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t("landing.howItWorks.support.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PeopleStrong Partner Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e40af] mb-4 sm:mb-5 md:mb-6 px-4">
              Our Partners
            </h1>
            <div className="flex flex-col items-center justify-center bg-white/90 backdrop-blur-md p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl shadow-lg shadow-blue-900/10 text-center animate-fade-in-up">
              <img
                src={psIcon}
                alt="PeopleStrong"
                width={100}
                height={100}
                className="mb-4 sm:mb-5 md:mb-6 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[100px] lg:h-[100px]"
              />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e40af] mb-4 sm:mb-5 md:mb-6 px-4">
                #WeArePeopleStrong
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-6 sm:mb-7 md:mb-8 leading-relaxed px-4">
                We help your HR team(s) simplify worklife and help you create a
                future-ready talent workforce. Our #HRTech 4.0 platform solves
                complex HR problems at scale throughout the employee life cycle.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => setIsDialogOpen(true)}
              >
                <span className="flex items-center gap-2">
                  Request a Demo
                  <ArrowRight size={20} strokeWidth={2} />
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Request Demo Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-[#1e40af]">
                Request a Demo
              </DialogTitle>
              <DialogDescription>
                Fill out the form below and we'll get back to you soon.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <input
                  name="name"
                  placeholder="Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg text-base font-sans transition-all duration-300 bg-white text-slate-900 focus:outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-blue-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-50"
                />
              </div>
              <div>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg text-base font-sans transition-all duration-300 bg-white text-slate-900 focus:outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-blue-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-50"
                />
              </div>
              <div>
                <input
                  name="subject"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg text-base font-sans transition-all duration-300 bg-white text-slate-900 focus:outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-blue-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-50"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  disabled={loading}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg text-base font-sans transition-all duration-300 bg-white text-slate-900 focus:outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-blue-100 resize-y min-h-[100px] disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-50"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-full py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </DialogContent>
        </Dialog>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#1e40af] to-[#2563eb] text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              {t("landing.cta.title")}
            </h2>
            <p
              className="text-xl mb-8 opacity-90 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              {t("landing.cta.description")}
            </p>
            <div
              className="flex gap-6 justify-center flex-wrap animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Link
                to="/contact"
                className="btn bg-white text-[#1e40af] hover:bg-slate-100 hover:shadow-xl"
              >
                {t("landing.cta.getStarted")}
              </Link>
              <Link
                to="/about"
                className="btn bg-transparent border-2 border-white text-white hover:bg-white/10"
              >
                {t("landing.cta.learnMore")}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
