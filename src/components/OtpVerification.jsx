import { useState } from 'react';

function OtpVerification() {
    const [otp, setOtp] = useState('');
    
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '25rem',
        width: '30rem',
        boxShadow: '0 6px 15px rgba(0, 0, 0, 0.15)',
        backgroundColor: '#f8fafc',
        marginTop: '4rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '12px',
        padding: '2rem'
    };
    
    const titleStyle = {
        fontWeight: '700',
        fontSize: '24px',
        marginBottom: '10px'
    };
    
    const subtitleStyle = {
        fontSize: '1rem',
        color: '#64748b',
        textAlign: 'center',
        marginBottom: '1.5rem'
    };
    
    const inputStyle = {
        height: '3rem',
        width: '80%',
        border: '2px solid #94a3b8',
        outline: 'none',
        transition: 'border-color 0.3s',
        fontSize: '1.2rem',
        color: '#374151',
        textAlign: 'center',
        borderRadius: '8px',
        marginBottom: '1.5rem'
    };
    
    const buttonStyle = {
        backgroundColor: '#3b82f6',
        padding: '0.75rem',
        width: '80%',
        color: 'white',
        fontWeight: 'bold',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1rem',
        borderRadius: '8px',
        transition: 'all 0.3s ease'
    };
    
    return (
        <div style={containerStyle}>
            <p style={titleStyle}>Enter OTP</p>
            <p style={subtitleStyle}>We have sent a 6-digit OTP to your registered email. Please enter it below.</p>
            <input 
                style={inputStyle} 
                type="text" 
                maxLength="6" 
                placeholder="Enter OTP" 
                value={otp} 
                onChange={(e) => setOtp(e.target.value)}
                onFocus={(e) => e.target.style.borderColor = '#3b82f6'} 
                onBlur={(e) => e.target.style.borderColor = '#94a3b8'}
            />
            <button 
                style={buttonStyle} 
                onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'} 
                onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}
            >
                Verify OTP
            </button>
        </div>
    );
}

export default OtpVerification;
