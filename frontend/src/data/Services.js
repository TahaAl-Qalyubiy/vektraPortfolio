import { Globe, Smartphone, Brain, Workflow, Building2 } from "lucide-react";

import ServicesImg from "../assets/images/Services.png";

export const services = [
	{
		id: 1,
		title: "Web Development & Design",
		description:
			"Scalable, high-performance web applications built for the modern enterprise ecosystem. We focus on speed, security, and exceptional user experiences.",
		icon: Globe,
		image: ServicesImg,
		features: [
			"React & Next.js Ecosystem",
			"High-Availability Backend Architecture",
			"API First Development",
		],
		button: null,
		size: "large",
	},

	{
		id: 2,
		title: "Mobile App Development",
		description:
			"Native and cross-platform mobile applications engineered for performance, reliability, and seamless user experiences.",
		icon: Smartphone,
		image: null,
		features: [],
		button: "Explore Mobile",
		size: "small",
	},

	{
		id: 3,
		title: "AI & Intelligent Systems",
		description:
			"Integrating LLMs and machine learning solutions to automate business workflows and uncover valuable insights.",
		icon: Brain,
		image: null,
		tags: ["NLP Engines", "Predictive Ops", "RAG Pipelines", "Computer Vision"],
		size: "medium",
	},

	{
		id: 4,
		title: "Automation & Workflows",
		description:
			"Enterprise-grade automation that eliminates repetitive work and streamlines complex operational processes.",
		icon: Workflow,
		image: null,
		technologies: ["n8n", "Zapier", "Make", "Custom APIs"],
		size: "medium",
	},

	{
		id: 5,
		title: "Custom Enterprise Solutions",
		description:
			"Bespoke software architecture designed for organizations that need scalable and secure business systems.",
		icon: Building2,
		image: null,
		features: [
			"Legacy Modernization",
			"Cloud-Native Migration",
			"Security Compliance",
		],
		size: "medium",
	},
];
