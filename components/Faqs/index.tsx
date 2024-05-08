import React from 'react'
import Accordion from '@/components/Accordion'

const faqsData = [
  {
    title: "What are the advantages of your service?",
    text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
    active: false,
  },
  {
    title: "Are there any fees or commissions in addition to the monthly subscription?",
    text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
    active: false,
  },
  {
    title: "You really don't charge per user? Why not?",
    text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
    active: false,
  },
  {
    title: "What happens when I go over my monthly active limit?",
    text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
    active: true,
  },
  {
    title: "Can your service help me understand how to work with my product?",
    text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
    active: false,
  },
  {
    title: "Which third-party application do you integrate with?",
    text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
    active: false,
  },
  {
    title: "I have another question!",
    text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
    active: false,
  },
]


const Faqs = () => {

  return (
    <div className='text-center py-28'>
      <h3 className='font-fit font-semibold text-4xl text-center'>Got Questions</h3>
      <div className="divide-y divide-slate-200 md:w-2/3 m-auto">
          {faqsData.map((faq, index) => (
            <Accordion key={index} title={faq.title} id={`faqs-${index}`} active={faq.active}>
              {faq.text}
            </Accordion>
          ))}
        </div>
    </div>
  )
}


export default Faqs