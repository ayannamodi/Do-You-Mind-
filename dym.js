(function() { 
    console.log('JS loaded');  // Debug: Confirms the script is running

    document.addEventListener('DOMContentLoaded', () => {
        
        const chatForm = document.getElementById('chat-form');
        const chatInput = document.getElementById('chat-input');
        const chatHistory = document.getElementById('chat-history');

        const knowledgeBase = {
            'neurodiversity': "Neurodiversity is a term for natural variations in brain function, like autism, ADHD, and dyslexia. It's not a deficit, but a different way of thinking that can bring unique strengths to STEM.",
            'autism': "Individuals with autism may have heightened abilities in pattern recognition, logical thinking, and memory. They often thrive in structured environments and with clear, step-by-step instructions. The book offers specific strategies for them.",
            'adhd': "People with ADHD often excel in creative problem-solving and can hyperfocus on topics they find engaging. Hands-on, project-based learning is a great strategy for students with ADHD.",
            'dyslexia': "Dyslexic learners frequently exhibit exceptional spatial reasoning and out-of-the-box thinking, which are highly valued in fields like engineering and design. Using visual and hands-on aids is very effective.",
            'strengths': "Neurodivergent students bring unique strengths like creative problem-solving, intense focus (hyperfocus), pattern recognition, and innovative thinking. A strengths-based approach is key to their success.",
            'barriers': "Systemic barriers include rigid expectations, overemphasis on standardized tests, and misinterpreting behaviors. The goal is to dismantle these by creating flexible and understanding learning environments.",
            'flexibility': "Flexibility in STEM education means allowing multiple solutions to problems, offering flexible deadlines, and providing information in various formats (visual, verbal, hands-on) to meet students where they are.",
            'strategies': "Effective strategies include Individualized Learning Plans (ILPs), Project-Based Learning (PBL), using multisensory techniques (visual, auditory, hands-on), and creating safe, predictable environments. Chapter 4 of the book details many activities!",
            'book': 'The book, "Innovative Minds," provides parents and educators with practical, research-backed strategies for teaching STEM to neurodiverse learners. You can find it on the "Book & Resources" page.',
            'toys': "The sensory toys are designed to help with focus and provide tactile stimulation, which can be calming and helpful for many neurodiverse students. They are 3D-printed based on my own research and design.",
            'collaboration': "Collaboration is crucial. In group settings, providing structured roles can help neurodiverse students thrive. For example, in a coding project, one student can be the coder, another the debugger, and another the presenter.",
            'careers': "Preparing for careers involves developing soft skills, providing tailored internships, and teaching self-advocacy. Companies like Microsoft and SAP have specific hiring programs that value the strengths of neurodivergent candidates.",
            'temple grandin': "Temple Grandin is a famous autistic scientist who revolutionized the livestock industry. Her ability to think in pictures allowed her to design more humane systems, showcasing how a neurodivergent perspective leads to innovation.",
        };

        chatForm.addEventListener('submit', (e) => {
            console.log('submit triggered');  // Debug: Confirms the form submit event fired
            e.preventDefault();
            const userInput = chatInput.value.trim();
            if (userInput === '') return;

            addMessage(userInput, 'user-message');
            
            chatInput.value = '';

            setTimeout(() => {
                const botResponse = getBotResponse(userInput);
                addMessage(botResponse, 'bot-message');
            }, 1000);
        });

        function addMessage(text, className) {
            const messageBubble = document.createElement('div');
            messageBubble.classList.add('chat-bubble', className);
            messageBubble.textContent = text;
            chatHistory.prepend(messageBubble); 
        }

        function getBotResponse(userInput) {
            const lowerInput = userInput.toLowerCase();
            
            for (const keyword in knowledgeBase) {
                if (lowerInput.includes(keyword)) {
                    return knowledgeBase[keyword];
                }
            }
            
            return "That's a great question! I am best equipped to answer questions about neurodiversity, teaching strategies, and the resources in the book. Please try asking about one of those topics.";
        }
    });

})();