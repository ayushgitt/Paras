import mongoose from "mongoose";

const policySchema = new mongoose.Schema({
    policy_id: {
        type: mongoose.Schema.Types.ObjectId, ref: "Policy"
    },
    interested_in: {
        type: Boolean
    }
});

const clientSchema = new mongoose.Schema({
    user_type: {
        type: String
    },
    personal_details: {
        first_name: {
            type: String
        },
        last_name: {
            type: String
        },
        dob: {
            type: Date
        },
        gender: {
            type: String
        },
        contact: {
            email: {
                type: String
            },
            phone: {
                type: String
            }
        },
        address: {
            street: {
                type: String
            },
            city: {
                type: String
            },
            state: {
                type: String
            },
            zipcode: {
                type: String
            },
            country: {
                type: String
            }
        },
        nominee: {
            name: {
                type: String
            },
            dob: {
                type: String
            },
            relationship: {
                type: String
            },
            phone: {
                type: String
            }
        }
    },
    financial_details: {
        pan_card: {
            type: String
        },
        aadhaar_number: {
            type: String
        },
        account_details: {
            account_number: {
                type: String
            },
            ifsc_code: {
                type: String
            },
            bank_name: {
                type: String
            }
        }
    },
    KYC: {
        type: Boolean
    },
    employment_details: {
        company_name: {
            type: String
        },
        designation: {
            type: String
        },
        annual_income: {
            type: Number
        }
    },
    lead_details: {
        source: {
            type: String
        },
        interest_level: {
            type: String
        },
        lead_stage: {
            type: String
        },
        assigned_to: {
            type: String
        },
        priority: {
            type: String
        },
        notes: {
            type: mongoose.Schema.Types.Array,
            default: []
        }
    },
    interaction_history: {
        type: mongoose.Schema.Types.Array,
        default: []
    },
    policies: {
        type: [policySchema]
    },
    notes: {
        type: mongoose.Schema.Types.Array,
        default: []
    }
}, { timestamps: true });

const Client = mongoose.model("Client", clientSchema);
export default Client;